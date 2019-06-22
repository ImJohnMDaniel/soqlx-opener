soqlx-opener
============

This command will open SoqlXplorer in the SalesforceDX scratch org specified.

[![Downloads/week](https://img.shields.io/npm/dw/soqlx-opener.svg)](https://npmjs.org/package/soqlx-opener)
[![License](https://img.shields.io/npm/l/soqlx-opener.svg)](https://github.com/ImJohnMDaniel/soqlx-opener/blob/master/package.json)

<!-- toc -->

<!-- tocstop -->
<!-- install -->
`$ sfdx plugins:install soqlx-opener`
<!-- installstop -->
<!-- usage -->
```sh-session
$ npm install -g soqlx-opener
$ sfdx COMMAND
running command...
$ sfdx (-v|--version|version)
soqlx-opener/0.1.11 darwin-x64 node-v11.10.1
$ sfdx --help [COMMAND]
USAGE
  $ sfdx COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
* [`sfdx soqlx:open [-d] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-soqlxopen--d--v-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx soqlx:open [-d] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

Command will open SoqlXplorer in the SalesforceDX scratch org specified

```
USAGE
  $ sfdx soqlx:open [-d] [-v <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -d, --debug                                                                       Debug flag to display more
                                                                                    information about connection

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  -v, --targetdevhubusername=targetdevhubusername                                   username or alias for the dev hub
                                                                                    org; overrides default dev hub org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx soqlx:open --targetusername myOrg@example.com --targetdevhubusername devhub@org.com
```

_See code: [src/commands/soqlx/open.ts](https://github.com/ImJohnMDaniel/soqlx-opener/blob/v0.1.11/src/commands/soqlx/open.ts)_
<!-- commandsstop -->
