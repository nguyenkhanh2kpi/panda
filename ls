NAME:
   login - Log user in

USAGE:
   cf login [-a API_URL] [-u USERNAME] [-p PASSWORD] [-o ORG] [-s SPACE] [--sso | --sso-passcode PASSCODE] [--origin ORIGIN]

WARNING:
   Providing your password as a command line option is highly discouraged
   Your password may be visible to others and may be recorded in your shell history

EXAMPLES:
   cf login (omit username and password to login interactively -- cf will prompt for both)
   cf login -u name@example.com -p pa55woRD (specify username and password as arguments)
   cf login -u name@example.com -p "my password" (use quotes for passwords with a space)
   cf login -u name@example.com -p "\"password\"" (escape quotes if used in password)
   cf login --sso (cf will provide a url to obtain a one-time passcode to login)
   cf login --origin ldap

ALIAS:
   l

OPTIONS:
   -a                         API endpoint (e.g. https://api.example.com)
   -o                         Org
   -p                         Password
   -s                         Space
   --skip-ssl-validation      Skip verification of the API endpoint. Not recommended!
   --sso                      Prompt for a one-time passcode to login
   --sso-passcode             One-time passcode
   -u                         Username
   --origin                   Indicates the identity provider to be used for login

SEE ALSO:
   api, auth, target
