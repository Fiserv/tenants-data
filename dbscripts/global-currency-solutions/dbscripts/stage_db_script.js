db.tenants.insertOne({
  title: 'Global Currency Solutions',
  name: 'GlobalCurrencySolutions',
  tenantHost: 'https://tenant-generic.stage-developer-portal.svc',
  tenantPort: '8443',
  providerAPIUrl: '/v1/products/GlobalCurrencySolutions',
  apiAuth: {},
  hasApis: true,
  productTags: [
    {
      category: 'Region', 
      value: 'Region',
      tags: ['North America','EMEA','LATAM','APAC'],
    },   
    {
      category: 'Integration Type', 
      value: 'Integration Type',
      tags: ['restful'],
    },  
    {
      category: 'Industry', 
      value: 'Industry',
      tags: [],
    },    
  ],   
  active: true,
  betaTag: true,
  internalTag: false,
  github: 'global-currency-solutions',
  selfServiceFeatures: [
    {
      featureName: 'Explore documentation',
      featureUrl: 'Support/docs/?path=docs/explore-documentation.md',
      active: true,
    },
    {
      featureName: 'API experimentation with Runbox',
      featureUrl: 'Support/docs/?path=docs/try-out-the-api-sandbox.md',
      active: false,
    },
    {
      featureName: 'Generate Credentials',
      featureUrl: '',
      active: false,
    },
    {
      featureName: 'Testing & Certification',
      featureUrl: '',
      active: false,
    },
  ], 
  gitHubFeatureBranches: [
    {
      name: 'active',
      value: 'stage',
      available: true,
      hasApis: true,
      sandboxType: 'live',
      liveSandbox: {
        serverUrl: 'https://api.test.com/tenantName',
        authenticationScheme: 'HMAC',
        username: '',
        password: '',
        selfSignedCert: false
      }
    },
    {
      name: 'previous',
      value: 'previous',
      available: false,
      hasApis: false,
      sandboxType: 'live',
      liveSandbox: {
        serverUrl: 'https://api.test.com/tenantName',
        authenticationScheme: 'HMAC',
        username: '',
        password: '',
        selfSignedCert: false
      }
    },
    {
      name: 'preview',
      value: 'preview',
      available: false,
      hasApis: false,
      sandboxType: 'live',
      liveSandbox: {
        serverUrl: 'https://api.test.com/tenantName',
        authenticationScheme: 'HMAC',
        username: '',
        password: '',
        selfSignedCert: false
      }
    }
  ]
})