# Magic Auth Integration with Auth0 React SDK Sample

This enhanced version of the Auth0 React SDK Sample Application showcases the integration of Magic's "Bring Your Own IDP" feature into a React application. Originally created using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html), this sample now demonstrates a seamless incorporation of Magic's wallet functionalities with Auth0's robust authentication system.

## Enhanced Use Cases:

- Seamless Wallet Creation: Automatically generate a non-custodial wallet for users upon successful authentication using Auth0.
- Secure Wallet Management: Users can view their wallet balances directly within the app.
- Simplified User Experience: Leverage Magic to offer users a streamlined login process without additional touchpoints.

## Project Setup

Use `yarn` to install the project dependencies:

```bash
yarn install
```

## Magic Integration Configuration

### Setting Up Magic's IDP Feature

To utilize Magic's IDP feature in conjunction with Auth0, configure the Magic SDK as per the [Magic documentation](https://magic.link/docs). Ensure your Auth0 domain and Magic's client ID are correctly set up for the integration to function properly.

### Configure Auth0 Credentials

Configure your Auth0 domain and client ID as before, ensuring proper linkage with Magic's authentication system:

```json
// Copy the src/auth_config.json.example file to src/auth_config.json and fill the config

{
  "domain": "{DOMAIN}",
  "clientId": "{CLIENT_ID}",
  "audience": "{API_IDENTIFIER}",
  "magicApiKey": "{MAGIC_API_KEY}",
  "magicProviderId": "{MAGIC_PROVIDER_ID}"
}
```

## Running the Enhanced Application

To see the Magic integration in action, follow the standard procedures to compile and run the application:

```bash
yarn run dev
```

## Frequently Asked Questions

For any issues related to the integration, refer to both the [auth0-react FAQ](https://github.com/auth0/auth0-react/blob/master/FAQ.md) and Magic's support resources.

## About Magic's IDP Integration

Magic's IDP feature adds a new dimension to Auth0's capabilities, allowing for blockchain-based wallet functionalities within your existing user management system. Learn more about Magic and its innovative solutions at [Magic's official website](https://magic.link).
