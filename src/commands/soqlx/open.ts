import {core, flags, SfdxCommand} from '@salesforce/command';
import {AnyJson} from '@salesforce/ts-types';
import { spawn } from 'child_process';

// Initialize Messages with the current plugin directory
core.Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = core.Messages.loadMessages('soqlx-opener', 'soqlx-open');

export default class Open extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [
  `$ sfdx soqlx:open --targetusername myOrg@example.com --targetdevhubusername devhub@org.com
  `
  ];

  protected static flagsConfig = {
    debug: flags.boolean({char: 'd', description: messages.getMessage('flagDebugDescription')})
  };

  // Comment this out if your command does not require an org username
  protected static requiresUsername = true;

  // Comment this out if your command does not support a hub org username
  protected static supportsDevhubUsername = true;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<AnyJson> {

    try {

      await this.org.refreshAuth();

      // if ( this.org.getConnection().isUsingAccessToken() ) {
      const instanceUrl = this.org.getConnection().instanceUrl.replace(/https/gi, 'soqlx');
      const accessToken = this.org.getConnection().accessToken;
      const completeUri = `${instanceUrl}sid/${accessToken}`;

      if ( this.flags.debug ) {
        this.ux.log(`Modified uri == ${instanceUrl}`);
        this.ux.log(`Access token == ${accessToken}`);
        this.ux.log(`Complete uri == ${completeUri}`);
      }

      // Split arguments to use spawn
      const args = [];
      args.push(`${completeUri}`);

      // this.ux.log(`Opening SoqlXplorer for scrqtch org ${this.org.getOrgId()} using username ${this.org.getUsername()}`);
      this.ux.log(messages.getMessage('messageOpeningSoqlxForOrg').replace('{0}', this.org.getOrgId()).replace('{1}', this.org.getUsername()));

      await spawn('open', args, { stdio: 'inherit'});

      // Return an object to be displayed with --json
      return { instanceUrl, accessToken };

    } catch (error) {

      throw new core.SfdxError( messages.getMessage('errorGeneral'), error);

    }
  }
}
