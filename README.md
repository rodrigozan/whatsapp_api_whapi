# MSG Whatsapp Whapi

Using _Whapi_ API to send whtatsapp message

### Settings

Clone the repository with `git clone https://github.com/rodrigozan/whatsapp_api_whapi.git`

Install all dependencies with `npm install` or `yarn install`

### Run Project

Run the project: `npm start` or `yarn start`

### Environment

Create a environment production file in src/environments/environment.prod.ts with the code:

```typescript
export const environment = {
  production: true,
  api_whapi_token: 'your_whapi_token',
  api_whapi_url: 'your_whapi_url'
};
```

Open the browser console to see the messages list.