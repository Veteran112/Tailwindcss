# AVID Prepaid React Landing Funnel 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), TypeScript, TailwindCSS, and axios.


## Available Scripts

In the project directory, you can run:

### `npm ci`

Installs exact package versions from package-lock.json used in development.

### `npm install`

Installs latest packages based of package.json. Should be done in a seperate commit.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## What does this app expect from the backend?

API endpoints are generally expected to be at the host URL in a subdirectory called `/AvidPrepaid`,

### `/AvidPrepaid/generateMobileToken`

```
Type: POST
Data: { codeType: "short", phone: <number> }
```

### `/AvidPrepaid/verifyMobileToken`
```
Type: POST
Data: { phone: <number>, token: <number> }
```

### `/AvidPrepaid/save-info-avid`
```
Type: POST
Data: {
      step: <string>,
      id: <number>,
      ref_code: <string>,
      people: [
        <array of people objects>
        {
          id: <number> 0-n,
          firstName: <string>,
          lastName: <string>,
          ssn: <number>,
          earlyBenefit: <bool>,
          selectedBenefits: <array of index values for benifits list>,
          benefitsNames: <array of string labels for benifits list>,
          recipient: "Primary" | "Beneficiary",
        },
      ],
      source: "DA Landing Site",
      mobile_number: <number>,
      mobileToken: <number>,
      recipientType: "both" | "myself" | "someone else",
      first_name: <string>,
      last_name: <string>,
      "Social Security": 1, (not sure)
      beneficiary_first_name: <string>,
      beneficiary_last_name: <string>,
      beneficiary_ssn1: <number>,
      earlyradio: "Yes" | "No",
      address1: <string> validated by USPS endpoint,
      address2: <string> validated by USPS endpoint,,
      city: <string> validated by USPS endpoint,
      state: null,<string> validated by USPS endpoint,
      zip: addresses.zip,
      ssn1: <number>,
      dob: <date> ex: "04/08/2004",
      email: <string>,
      txtAlert: "on" | "off",
      fundingType: "debitCard" | ,
      username: email key value,
      password: <string>,
      password2: <string>,
      CSRFToken: null,
      }
```

### `/AvidPrepaid/get-avid-card`
```
Type: POST
Data: {
      step: <string>,
      id: <number>,
      ref_code: <string>,
      people: [
        <array of people objects>
        {
          id: <number> 0-n,
          firstName: <string>,
          lastName: <string>,
          ssn: <number>,
          earlyBenefit: <bool>,
          selectedBenefits: <array of index values for benifits list>,
          benefitsNames: <array of string labels for benifits list>,
          recipient: "Primary" | "Beneficiary",
        },
      ],
      source: "DA Landing Site",
      mobile_number: <number>,
      mobileToken: <number>,
      recipientType: "both" | "myself" | "someone else",
      first_name: <string>,
      last_name: <string>,
      "Social Security": 1, (not sure)
      beneficiary_first_name: <string>,
      beneficiary_last_name: <string>,
      beneficiary_ssn1: <number>,
      earlyradio: "Yes" | "No",
      address1: <string> validated by USPS endpoint,
      address2: <string> validated by USPS endpoint,,
      city: <string> validated by USPS endpoint,
      state: null,<string> validated by USPS endpoint,
      zip: addresses.zip,
      ssn1: <number>,
      dob: <date> ex: "04/08/2004",
      email: <string>,
      txtAlert: "on" | "off",
      fundingType: "debitCard" | ,
      username: email key value,
      password: <string>,
      password2: <string>,
      CSRFToken: null,
      }
```

### `/AvidPrepaid/credsPreval`
```
Type: POST
Data: {
      email: <string>,
      }
```

###  