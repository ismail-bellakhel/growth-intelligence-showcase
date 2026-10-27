// Public provider field definitions only. No configured accounts or credentials.
export const providers = [
  {
    "id": "ga4",
    "name": "Google Analytics 4",
    "group": "Analytics",
    "auth": "Google OAuth",
    "fields": [
      {
        "key": "property_id",
        "label": "GA4 property ID",
        "help": "Use the numeric ID shown in the provider account.",
        "required": true,
        "type": "text",
        "pattern": "^[0-9]+$"
      },
      {
        "key": "account_label",
        "label": "Account label",
        "help": "",
        "required": false,
        "type": "text"
      },
      {
        "key": "sync_frequency",
        "label": "Sync frequency",
        "help": "",
        "required": true,
        "type": "select",
        "options": [
          "Daily",
          "Weekly",
          "Manual"
        ]
      }
    ],
    "permissions": [
      "Read analytics reports for the selected property.",
      "Your Google account must have access to that property.",
      "Enable Google Analytics Data API in the connector project."
    ],
    "docs": "https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart-client-libraries",
    "notes": "A GA4 property ID is numeric. A G- measurement ID is not a property ID."
  },
  {
    "id": "search_console",
    "name": "Google Search Console",
    "group": "SEO",
    "auth": "Google OAuth",
    "fields": [
      {
        "key": "property",
        "label": "Verified property",
        "help": "Use sc-domain:yourdomain.com or the exact URL-prefix property.",
        "required": true,
        "type": "text"
      },
      {
        "key": "search_type",
        "label": "Search type",
        "help": "",
        "required": true,
        "type": "select",
        "options": [
          "Web",
          "Image",
          "Video",
          "News"
        ]
      },
      {
        "key": "sync_frequency",
        "label": "Sync frequency",
        "help": "",
        "required": true,
        "type": "select",
        "options": [
          "Daily",
          "Weekly",
          "Manual"
        ]
      }
    ],
    "permissions": [
      "Read Search Console data.",
      "The authorized Google account must have access to the property."
    ],
    "docs": "https://developers.google.com/webmaster-tools/v1/how-tos/authorizing",
    "notes": ""
  },
  {
    "id": "hubspot",
    "name": "HubSpot",
    "group": "CRM & Sales",
    "auth": "HubSpot OAuth",
    "fields": [
      {
        "key": "portal_id",
        "label": "HubSpot account ID",
        "help": "Use the numeric ID shown in the provider account.",
        "required": true,
        "type": "text",
        "pattern": "^[0-9]+$"
      },
      {
        "key": "pipeline",
        "label": "Pipeline identifier",
        "help": "Optional; leave blank to choose after authorization.",
        "required": false,
        "type": "text"
      },
      {
        "key": "sync_frequency",
        "label": "Sync frequency",
        "help": "",
        "required": true,
        "type": "select",
        "options": [
          "Daily",
          "Weekly",
          "Manual"
        ]
      }
    ],
    "permissions": [
      "Read contacts, companies and deals.",
      "Select appropriate CRM read scopes when configuring the OAuth application."
    ],
    "docs": "https://developers.hubspot.com/docs/api/working-with-oauth",
    "notes": ""
  }
];
