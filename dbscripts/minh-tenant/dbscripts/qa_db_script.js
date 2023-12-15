db.tenants.insertOne({
  title: 'Minh Tenant',
  name: 'MinhTenant',
  tenantHost: 'https://tenant-generic.qa-developer-portal.svc',
  tenantPort: '8443',
  providerAPIUrl: '/v1/products/MinhTenant',
  apiAuth: {},
  hasApis: true,
  productTags: [
    {
      category: 'Region', 
      value: 'Region',
      tags: [''],
    },   
    {
      category: 'Integration Type', 
      value: 'Integration Type',
      tags: [''],
    },  
    {
      category: 'Industry', 
      value: 'Industry',
      tags: ['Testing'],
    },    
  ],   
  active: true,
  betaTag: true,
  internalTag: false,
  github: 'minh-tenant',
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
      value: 'develop',
      available: true,
      hasApis: true,
      sandboxType: 'live',
      mockServerUrl: 'http://tenant-generic-mock-service:8443/sandboxrun',
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
      mockServerUrl: 'http://tenant-generic-mock-service:8443/sandboxrun',
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
      mockServerUrl: 'http://tenant-generic-mock-service:8443/sandboxrun',
      liveSandbox: {
        serverUrl: 'https://api.test.com/tenantName',
        authenticationScheme: 'HMAC',
        username: '',
        password: '',
        selfSignedCert: false
      }
    }
  ]
});