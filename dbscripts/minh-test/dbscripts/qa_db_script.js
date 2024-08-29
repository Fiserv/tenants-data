db.tenants.insertOne({
  title: 'Minh Test',
  name: 'MinhTest',
  tenantHost: 'https://tenant-generic.qa-developer-portal.svc',
  tenantPort: '8443',
  providerAPIUrl: '/v1/products/MinhTest',
  apiAuth: {},
  hasApis: true,
  productTags: [
    {
      category: 'Region', 
      value: 'Region',
      tags: ["North America"],
    },    
    {
      category: 'Customer Segment', 
      value: 'Customer_Segment',
      tags: ["Enterprise","Credit Union"],
    },    
    {
      category: 'Capability', 
      value: 'Capability',
      tags: ["Boarding &amp; Management","Omni-Channel","Value Added Services","Banking as a Service","Financial Data Management"],
    },
  ],   
  active: true,
  betaTag: false,
  internalTag: false,
  github: 'minh-test',
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
      sandboxType: 'mock',
      mockServerUrl: 'http://tenant-generic-mock-service:8443/sandboxrun',
    },
    {
      name: 'previous',
      value: 'previous',
      available: false,
      hasApis: false,
      sandboxType: 'mock',
      mockServerUrl: 'http://tenant-generic-mock-service:8443/sandboxrun',
    },
    {
      name: 'preview',
      value: 'preview',
      available: false,
      hasApis: false,
      sandboxType: 'mock',
      mockServerUrl: 'http://tenant-generic-mock-service:8443/sandboxrun',
    }
  ],
  contactSales: true,
})