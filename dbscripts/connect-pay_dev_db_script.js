db.tenants.insertOne({
          title: 'connect-pay',
          name: 'connect-pay',
          tenantHost: 'https://tenant-generic.dev-developer-portal.svc',
          tenantPort: '8443',
          providerAPIUrl: '/v1/products/connect-pay',
          apiAuth: {},
          productTags: [{
            category: 'Region', 
            value: 'Region',
            tags: ['North America','EMEA','LATAM','APAC'],
            },   
            {
            category: 'Integration Type', 
            value: 'Integration Type',
            tags: ['restful','sdk'],
            },  
            {
            category: 'Industry', 
            value: 'Industry',
            tags: ['Banking , Retail'],
            },    
            ],   
            active: true,
            betaTag: true,
            internalTag:false,
            github: 'connect-pay',
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
                sandboxType: true,
                mockServerUrl: 'http://tenant-generic-mock-service:8443/sandboxrun'
            },
            {
                name: 'previous',
                value: 'previous',
                available: false,
                hasApis: false,
                sandboxType: 'GMS',
                mockServerUrl: 'http://tenant-generic-mock-service:8443/sandboxrun'
            },
            {
                name: 'preview',
                value: 'preview',
                available: false,
                hasApis: false,
                sandboxType: 'GMS',
                mockServerUrl: 'http://tenant-generic-mock-service:8443/sandboxrun'
            }
            ], 
            }
            );