# Project Feature

This Feature is for get data project from Sentry. Base URL you can take from `sentry_base_url` from database in `user` table.
The URL you can take from `organizations/{sentry_organization_id}/projects/`

# Example Response

```
[
    {
        "team": {
            "id": "40",
            "slug": "accommodation-reservation-team",
            "name": "accommodation-reservation-team"
        },
        "teams": [
            {
                "id": "40",
                "slug": "accommodation-reservation-team",
                "name": "accommodation-reservation-team"
            }
        ],
        "id": "152",
        "name": "accommodation-reservation-apps-dev",
        "slug": "accommodation-reservation-apps-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2024-07-09T02:38:52.963622Z",
        "environments": [
            "development",
            "local"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2024-07-19T08:56:09.549844Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": true,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": true,
        "hasInsightsQueues": true,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "php",
            "other"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "40",
            "slug": "accommodation-reservation-team",
            "name": "accommodation-reservation-team"
        },
        "teams": [
            {
                "id": "40",
                "slug": "accommodation-reservation-team",
                "name": "accommodation-reservation-team"
            }
        ],
        "id": "167",
        "name": "accommodation-reservation-apps-stag",
        "slug": "accommodation-reservation-apps-stag",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2024-11-26T02:43:12.229349Z",
        "environments": [
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2024-11-26T04:35:46.847953Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": true,
        "hasInsightsQueues": true,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "php"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "48",
            "slug": "ai-marketing",
            "name": "ai-marketing"
        },
        "teams": [
            {
                "id": "48",
                "slug": "ai-marketing",
                "name": "ai-marketing"
            }
        ],
        "id": "204",
        "name": "ai-marketing-api-dev",
        "slug": "ai-marketing-api-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-09-30T03:25:59.535585Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-10-10T02:01:39.342000Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "48",
            "slug": "ai-marketing",
            "name": "ai-marketing"
        },
        "teams": [
            {
                "id": "48",
                "slug": "ai-marketing",
                "name": "ai-marketing"
            }
        ],
        "id": "205",
        "name": "ai-marketing-api-prod",
        "slug": "ai-marketing-api-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-09-30T03:26:32.733272Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-10-02T04:19:22.120000Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "48",
            "slug": "ai-marketing",
            "name": "ai-marketing"
        },
        "teams": [
            {
                "id": "48",
                "slug": "ai-marketing",
                "name": "ai-marketing"
            }
        ],
        "id": "206",
        "name": "ai-marketing-api-test-temp",
        "slug": "ai-marketing-api-test-temp",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-09-30T03:50:45.005398Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-09-30T04:08:36.231000Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "48",
            "slug": "ai-marketing",
            "name": "ai-marketing"
        },
        "teams": [
            {
                "id": "48",
                "slug": "ai-marketing",
                "name": "ai-marketing"
            }
        ],
        "id": "203",
        "name": "ai-marketing-fe-dev",
        "slug": "ai-marketing-fe-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-09-30T03:24:39.196102Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-09-30T07:29:53.558000Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "48",
            "slug": "ai-marketing",
            "name": "ai-marketing"
        },
        "teams": [
            {
                "id": "48",
                "slug": "ai-marketing",
                "name": "ai-marketing"
            }
        ],
        "id": "195",
        "name": "ai-marketing-fe-prod",
        "slug": "ai-marketing-fe-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-08-07T06:44:33.625882Z",
        "environments": [],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": null,
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "49",
            "slug": "ai-review",
            "name": "ai-review"
        },
        "teams": [
            {
                "id": "49",
                "slug": "ai-review",
                "name": "ai-review"
            }
        ],
        "id": "197",
        "name": "ai-review",
        "slug": "ai-review",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-08-14T03:22:37.309767Z",
        "environments": [
            "production",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2025-08-14T04:34:03.669000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [
            "node"
        ],
        "latestRelease": {
            "version": "fc071af851eb955d6ecaaa61ddec2241694579df"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "8",
            "slug": "alami-team",
            "name": "alami-team"
        },
        "teams": [
            {
                "id": "8",
                "slug": "alami-team",
                "name": "alami-team"
            }
        ],
        "id": "50",
        "name": "alami-backoffice",
        "slug": "alami-backoffice",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-10-17T04:21:49.499245Z",
        "environments": [],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": null,
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "59",
            "slug": "dot-bikin-rindu",
            "name": "dot-bikin-rindu"
        },
        "teams": [
            {
                "id": "59",
                "slug": "dot-bikin-rindu",
                "name": "dot-bikin-rindu"
            }
        ],
        "id": "225",
        "name": "bikin-rindu-tools-dev",
        "slug": "bikin-rindu-tools-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2026-01-19T02:30:22.503263Z",
        "environments": [
            "production",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2026-01-19T11:15:58.043000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [
            "javascript",
            "node"
        ],
        "latestRelease": {
            "version": "e65320cf658f6e5fcbe161f538b83c1b7c192f85"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "47",
            "slug": "bms-kek-autogate-team",
            "name": "bms-kek-autogate-team"
        },
        "teams": [
            {
                "id": "47",
                "slug": "bms-kek-autogate-team",
                "name": "bms-kek-autogate-team"
            }
        ],
        "id": "175",
        "name": "bms-kek-autogate-be-dev",
        "slug": "bms-kek-autogate-be-dev",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2025-04-18T10:12:18.924792Z",
        "environments": [
            "development",
            "staging",
            "prod"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-04-18T10:31:47.824000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node-nestjs",
        "platforms": [
            "node",
            "other"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "47",
            "slug": "bms-kek-autogate-team",
            "name": "bms-kek-autogate-team"
        },
        "teams": [
            {
                "id": "47",
                "slug": "bms-kek-autogate-team",
                "name": "bms-kek-autogate-team"
            }
        ],
        "id": "180",
        "name": "bms-kek-autogate-be-stag",
        "slug": "bms-kek-autogate-be-stag",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2025-04-30T03:35:11.196717Z",
        "environments": [
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-04-30T03:42:18.177000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node-nestjs",
        "platforms": [
            "node",
            "other"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "47",
            "slug": "bms-kek-autogate-team",
            "name": "bms-kek-autogate-team"
        },
        "teams": [
            {
                "id": "47",
                "slug": "bms-kek-autogate-team",
                "name": "bms-kek-autogate-team"
            }
        ],
        "id": "176",
        "name": "bms-kek-autogate-fe-dev",
        "slug": "bms-kek-autogate-fe-dev",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2025-04-21T02:20:47.685693Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2025-05-09T09:59:29.289000Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-react",
        "platforms": [
            "javascript",
            "other"
        ],
        "latestRelease": {
            "version": "2e1777550bb0f1362bf0fc1a2537f1d6917a52d3"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "47",
            "slug": "bms-kek-autogate-team",
            "name": "bms-kek-autogate-team"
        },
        "teams": [
            {
                "id": "47",
                "slug": "bms-kek-autogate-team",
                "name": "bms-kek-autogate-team"
            }
        ],
        "id": "181",
        "name": "bms-kek-autogate-fe-stag",
        "slug": "bms-kek-autogate-fe-stag",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2025-04-30T03:44:51.429822Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-05-14T01:10:01.962000Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-react",
        "platforms": [
            "javascript",
            "other"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "47",
            "slug": "bms-kek-autogate-team",
            "name": "bms-kek-autogate-team"
        },
        "teams": [
            {
                "id": "47",
                "slug": "bms-kek-autogate-team",
                "name": "bms-kek-autogate-team"
            }
        ],
        "id": "184",
        "name": "bms-kek-autogate-mobile-dev",
        "slug": "bms-kek-autogate-mobile-dev",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2025-06-03T07:06:46.494897Z",
        "environments": [
            "production",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2025-06-03T09:16:44.893000Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "react-native",
        "platforms": [],
        "latestRelease": {
            "version": "com.jiipe.autogate@1.0.0+19"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "22",
            "slug": "boilerplate-team",
            "name": "boilerplate-team"
        },
        "teams": [
            {
                "id": "22",
                "slug": "boilerplate-team",
                "name": "boilerplate-team"
            }
        ],
        "id": "164",
        "name": "boilerplate-dotnet-service",
        "slug": "boilerplate-dotnet-service",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2024-10-30T04:16:30.687546Z",
        "environments": [
            "Development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-10-30T09:58:51.672160Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "dotnet-aspnetcore",
        "platforms": [
            "csharp"
        ],
        "latestRelease": {
            "version": "TaxSystemService@1.0.0+d8f2666ce7f897aec0894e3d90e1490f7ac3f415"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "22",
            "slug": "boilerplate-team",
            "name": "boilerplate-team"
        },
        "teams": [
            {
                "id": "22",
                "slug": "boilerplate-team",
                "name": "boilerplate-team"
            }
        ],
        "id": "228",
        "name": "boilerplate-go-service",
        "slug": "boilerplate-go-service",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2026-02-03T09:59:25.731287Z",
        "environments": [],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2026-02-06T09:40:39.649097Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "go-gin",
        "platforms": [
            "go"
        ],
        "latestRelease": {
            "version": "4d21ab2-dirty"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "22",
            "slug": "boilerplate-team",
            "name": "boilerplate-team"
        },
        "teams": [
            {
                "id": "22",
                "slug": "boilerplate-team",
                "name": "boilerplate-team"
            }
        ],
        "id": "80",
        "name": "boilerplate-nestant",
        "slug": "boilerplate-nestant",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2023-02-01T04:27:02.876333Z",
        "environments": [
            "production",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-02-01T05:04:38.984000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "22",
            "slug": "boilerplate-team",
            "name": "boilerplate-team"
        },
        "teams": [
            {
                "id": "22",
                "slug": "boilerplate-team",
                "name": "boilerplate-team"
            }
        ],
        "id": "179",
        "name": "boilerplate-nestjs-inertia",
        "slug": "boilerplate-nestjs-inertia",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2025-04-23T06:40:02.729092Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-04-23T06:48:10.150000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node-nestjs",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "22",
            "slug": "boilerplate-team",
            "name": "boilerplate-team"
        },
        "teams": [
            {
                "id": "22",
                "slug": "boilerplate-team",
                "name": "boilerplate-team"
            }
        ],
        "id": "82",
        "name": "boilerplate-nestjs-inertia-dev",
        "slug": "boilerplate-nestjs-inertia-dev",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2023-02-15T09:46:46.518470Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-02-15T09:48:09.600000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "22",
            "slug": "boilerplate-team",
            "name": "boilerplate-team"
        },
        "teams": [
            {
                "id": "22",
                "slug": "boilerplate-team",
                "name": "boilerplate-team"
            }
        ],
        "id": "191",
        "name": "boilerplate-nestjs-service",
        "slug": "boilerplate-nestjs-service",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2025-07-18T09:04:45.754377Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-07-18T09:16:15.372000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node-nestjs",
        "platforms": [
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "22",
            "slug": "boilerplate-team",
            "name": "boilerplate-team"
        },
        "teams": [
            {
                "id": "22",
                "slug": "boilerplate-team",
                "name": "boilerplate-team"
            }
        ],
        "id": "163",
        "name": "boilerplate-nextjs-admiral",
        "slug": "boilerplate-nextjs-admiral",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2024-10-30T03:44:08.161002Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-11-28T07:49:24.448000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [],
        "latestRelease": {
            "version": "NHCR5KvVgk_V0P_drKtc_"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "34",
            "slug": "gitlab",
            "name": "gitlab"
        },
        "teams": [
            {
                "id": "34",
                "slug": "gitlab",
                "name": "gitlab"
            }
        ],
        "id": "137",
        "name": "dot-gitlab",
        "slug": "dot-gitlab",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2024-01-14T02:57:03.687622Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-01-14T03:06:25Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "ruby-rails",
        "platforms": [
            "ruby"
        ],
        "latestRelease": {
            "version": "87936107271"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "10",
            "slug": "dotify-team",
            "name": "dotify-team"
        },
        "teams": [
            {
                "id": "10",
                "slug": "dotify-team",
                "name": "dotify-team"
            }
        ],
        "id": "106",
        "name": "dotify-api-dev",
        "slug": "dotify-api-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-07-21T07:33:30.083449Z",
        "environments": [
            "development",
            "local"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-07-24T02:12:37.998000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "10",
            "slug": "dotify-team",
            "name": "dotify-team"
        },
        "teams": [
            {
                "id": "10",
                "slug": "dotify-team",
                "name": "dotify-team"
            }
        ],
        "id": "111",
        "name": "dotify-api-prod",
        "slug": "dotify-api-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-08-24T01:25:43.392474Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-08-24T02:03:08.066000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "10",
            "slug": "dotify-team",
            "name": "dotify-team"
        },
        "teams": [
            {
                "id": "10",
                "slug": "dotify-team",
                "name": "dotify-team"
            }
        ],
        "id": "19",
        "name": "dotify-dev",
        "slug": "dotify-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-09-28T08:50:31.359745Z",
        "environments": [
            "production",
            "develop",
            "development",
            "local",
            "prod"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2022-09-28T08:53:21.221980Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "other",
            "php"
        ],
        "latestRelease": {
            "version": "0.92.83"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "10",
            "slug": "dotify-team",
            "name": "dotify-team"
        },
        "teams": [
            {
                "id": "10",
                "slug": "dotify-team",
                "name": "dotify-team"
            }
        ],
        "id": "107",
        "name": "dotify-mobile-dev",
        "slug": "dotify-mobile-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-07-21T09:40:21.593400Z",
        "environments": [
            "production",
            "debug"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2023-07-24T07:20:19.363000Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "flutter",
        "platforms": [
            "other",
            "java"
        ],
        "latestRelease": {
            "version": "com.dot.internal.dotify_mobile.dev@1.0.5+2007"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "10",
            "slug": "dotify-team",
            "name": "dotify-team"
        },
        "teams": [
            {
                "id": "10",
                "slug": "dotify-team",
                "name": "dotify-team"
            }
        ],
        "id": "110",
        "name": "dotify-mobile-prod",
        "slug": "dotify-mobile-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-08-22T09:10:01.370110Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2023-08-24T05:03:16.835000Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "flutter",
        "platforms": [
            "cocoa",
            "other",
            "javascript"
        ],
        "latestRelease": {
            "version": "com.dot.internal.dotify_mobile@1.0.5+2007"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "10",
            "slug": "dotify-team",
            "name": "dotify-team"
        },
        "teams": [
            {
                "id": "10",
                "slug": "dotify-team",
                "name": "dotify-team"
            }
        ],
        "id": "170",
        "name": "dotify-new-dev",
        "slug": "dotify-new-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2024-12-12T07:38:43.575287Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2025-02-27T09:07:12.615000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [
            "javascript",
            "node",
            "other"
        ],
        "latestRelease": {
            "version": "DEVwDr_KS67wgw9e_Hpa1"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "10",
            "slug": "dotify-team",
            "name": "dotify-team"
        },
        "teams": [
            {
                "id": "10",
                "slug": "dotify-team",
                "name": "dotify-team"
            }
        ],
        "id": "173",
        "name": "dotify-new-prod",
        "slug": "dotify-new-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-01-22T14:44:42.189391Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2025-02-06T05:08:01.814000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [
            "node",
            "javascript",
            "other"
        ],
        "latestRelease": {
            "version": "qDgXPshZCqcYkmF3nEEv5"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "10",
            "slug": "dotify-team",
            "name": "dotify-team"
        },
        "teams": [
            {
                "id": "10",
                "slug": "dotify-team",
                "name": "dotify-team"
            }
        ],
        "id": "20",
        "name": "dotify-prod",
        "slug": "dotify-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-09-28T08:55:43.032129Z",
        "environments": [
            "production",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2022-09-28T09:01:01.152531Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "php",
            "other",
            "javascript"
        ],
        "latestRelease": {
            "version": "c57ad994508ea1563664f170812daa25157c64b6"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "21",
            "slug": "riset",
            "name": "riset"
        },
        "teams": [
            {
                "id": "21",
                "slug": "riset",
                "name": "riset"
            }
        ],
        "id": "78",
        "name": "dotnet-riset",
        "slug": "dotnet-riset",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2023-01-10T02:45:29.277316Z",
        "environments": [],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": null,
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "dotnet-aspnetcore",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "13",
            "slug": "dot-system",
            "name": "dot-system"
        },
        "teams": [
            {
                "id": "13",
                "slug": "dot-system",
                "name": "dot-system"
            }
        ],
        "id": "11",
        "name": "dot-redash-prod",
        "slug": "dot-redash-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-09-28T02:07:42.182705Z",
        "environments": [],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2022-09-28T02:17:37.841883Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "python-flask",
        "platforms": [],
        "latestRelease": {
            "version": "10.1.0"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "28",
            "slug": "dot-update-team",
            "name": "dot-update-team"
        },
        "teams": [
            {
                "id": "28",
                "slug": "dot-update-team",
                "name": "dot-update-team"
            }
        ],
        "id": "96",
        "name": "dot-update-dev",
        "slug": "dot-update-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-05-24T02:47:18.216647Z",
        "environments": [],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": null,
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "50",
            "slug": "dpr-digital-sign-team",
            "name": "dpr-digital-sign-team"
        },
        "teams": [
            {
                "id": "50",
                "slug": "dpr-digital-sign-team",
                "name": "dpr-digital-sign-team"
            }
        ],
        "id": "201",
        "name": "dpr-digital-sign-backend",
        "slug": "dpr-digital-sign-backend",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-09-16T04:24:57.744809Z",
        "environments": [
            "develop",
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-09-19T07:19:59.497888Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": true,
        "hasInsightsQueues": true,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "php",
            "other"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "50",
            "slug": "dpr-digital-sign-team",
            "name": "dpr-digital-sign-team"
        },
        "teams": [
            {
                "id": "50",
                "slug": "dpr-digital-sign-team",
                "name": "dpr-digital-sign-team"
            }
        ],
        "id": "214",
        "name": "dpr-digital-sign-backend-new",
        "slug": "dpr-digital-sign-backend-new",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-11-26T02:01:01.671126Z",
        "environments": [
            "develop"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-11-27T03:47:52.085555Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": true,
        "hasInsightsQueues": true,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "php"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "50",
            "slug": "dpr-digital-sign-team",
            "name": "dpr-digital-sign-team"
        },
        "teams": [
            {
                "id": "50",
                "slug": "dpr-digital-sign-team",
                "name": "dpr-digital-sign-team"
            }
        ],
        "id": "221",
        "name": "dpr-digital-sign-backend-stag",
        "slug": "dpr-digital-sign-backend-stag",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2026-01-08T02:09:49.470624Z",
        "environments": [
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2026-01-13T01:56:36.787392Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": true,
        "hasInsightsQueues": true,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "php"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "50",
            "slug": "dpr-digital-sign-team",
            "name": "dpr-digital-sign-team"
        },
        "teams": [
            {
                "id": "50",
                "slug": "dpr-digital-sign-team",
                "name": "dpr-digital-sign-team"
            }
        ],
        "id": "200",
        "name": "dpr-digital-sign-frontend",
        "slug": "dpr-digital-sign-frontend",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-09-16T04:24:29.869145Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2025-09-22T02:37:31.338000Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-react",
        "platforms": [
            "javascript",
            "other"
        ],
        "latestRelease": {
            "version": "c57ad994508ea1563664f170812daa25157c64b6"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "50",
            "slug": "dpr-digital-sign-team",
            "name": "dpr-digital-sign-team"
        },
        "teams": [
            {
                "id": "50",
                "slug": "dpr-digital-sign-team",
                "name": "dpr-digital-sign-team"
            }
        ],
        "id": "215",
        "name": "dpr-digital-sign-frontend-new",
        "slug": "dpr-digital-sign-frontend-new",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-11-26T02:01:54.463629Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-11-29T08:36:16.144000Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-react",
        "platforms": [
            "javascript"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "50",
            "slug": "dpr-digital-sign-team",
            "name": "dpr-digital-sign-team"
        },
        "teams": [
            {
                "id": "50",
                "slug": "dpr-digital-sign-team",
                "name": "dpr-digital-sign-team"
            }
        ],
        "id": "220",
        "name": "dpr-digital-sign-frontend-stag",
        "slug": "dpr-digital-sign-frontend-stag",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2026-01-08T01:25:52.926741Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2026-01-31T02:20:54.781000Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-react",
        "platforms": [
            "javascript"
        ],
        "latestRelease": {
            "version": "c57ad994508ea1563664f170812daa25157c64b6"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "53",
            "slug": "dpr-open-data",
            "name": "dpr-open-data"
        },
        "teams": [
            {
                "id": "53",
                "slug": "dpr-open-data",
                "name": "dpr-open-data"
            }
        ],
        "id": "207",
        "name": "dpr-open-data-frontend-prod",
        "slug": "dpr-open-data-frontend-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-10-09T07:29:07.256275Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2025-10-10T16:39:46.049000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [
            "javascript"
        ],
        "latestRelease": {
            "version": "_SIjgjpIFq3G84gv7Ihly"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "17",
            "slug": "dpr-sniper-team",
            "name": "dpr-sniper-team"
        },
        "teams": [
            {
                "id": "17",
                "slug": "dpr-sniper-team",
                "name": "dpr-sniper-team"
            }
        ],
        "id": "39",
        "name": "dpr-sniper-backend-dev",
        "slug": "dpr-sniper-backend-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-10-10T07:49:22.656328Z",
        "environments": [
            "development",
            "local",
            "prod"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2022-11-24T07:30:11.503959Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": {
            "version": "checkout-app@3.2"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "17",
            "slug": "dpr-sniper-team",
            "name": "dpr-sniper-team"
        },
        "teams": [
            {
                "id": "17",
                "slug": "dpr-sniper-team",
                "name": "dpr-sniper-team"
            }
        ],
        "id": "40",
        "name": "dpr-sniper-frontend-dev",
        "slug": "dpr-sniper-frontend-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-10-10T07:49:47.996399Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2023-05-21T03:55:16.993000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [],
        "latestRelease": {
            "version": "K0xm6ZzTELzaafMMH5njB"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "26",
            "slug": "dpr-website-revamp-team",
            "name": "dpr-website-revamp-team"
        },
        "teams": [
            {
                "id": "26",
                "slug": "dpr-website-revamp-team",
                "name": "dpr-website-revamp-team"
            }
        ],
        "id": "92",
        "name": "dpr-website-revamp-dev",
        "slug": "dpr-website-revamp-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-03-16T10:03:55.841439Z",
        "environments": [
            "development",
            "local"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-05-17T09:18:19.950403Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "26",
            "slug": "dpr-website-revamp-team",
            "name": "dpr-website-revamp-team"
        },
        "teams": [
            {
                "id": "26",
                "slug": "dpr-website-revamp-team",
                "name": "dpr-website-revamp-team"
            }
        ],
        "id": "103",
        "name": "dpr-website-revamp-new-dev",
        "slug": "dpr-website-revamp-new-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-07-04T05:02:47.771084Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-07-04T05:05:19.863711Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "26",
            "slug": "dpr-website-revamp-team",
            "name": "dpr-website-revamp-team"
        },
        "teams": [
            {
                "id": "26",
                "slug": "dpr-website-revamp-team",
                "name": "dpr-website-revamp-team"
            }
        ],
        "id": "125",
        "name": "dpr-website-revamp-prod",
        "slug": "dpr-website-revamp-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-11-01T13:20:22.575843Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-11-01T13:23:57.284765Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "26",
            "slug": "dpr-website-revamp-team",
            "name": "dpr-website-revamp-team"
        },
        "teams": [
            {
                "id": "26",
                "slug": "dpr-website-revamp-team",
                "name": "dpr-website-revamp-team"
            }
        ],
        "id": "94",
        "name": "dpr-website-revamp-test",
        "slug": "dpr-website-revamp-test",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-04-18T04:06:57.678363Z",
        "environments": [
            "local"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-04-18T07:39:27.528932Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "20",
            "slug": "flip-team",
            "name": "flip-team"
        },
        "teams": [
            {
                "id": "20",
                "slug": "flip-team",
                "name": "flip-team"
            }
        ],
        "id": "70",
        "name": "flip-website-strapi-stag",
        "slug": "flip-website-strapi-stag",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-12-07T08:04:08.803155Z",
        "environments": [
            "production",
            "development",
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2022-12-13T08:25:36.612000Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "21",
            "slug": "riset",
            "name": "riset"
        },
        "teams": [
            {
                "id": "21",
                "slug": "riset",
                "name": "riset"
            }
        ],
        "id": "75",
        "name": "flutter-riset",
        "slug": "flutter-riset",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2023-01-10T02:43:15.987918Z",
        "environments": [
            "prod",
            "debug"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2023-01-31T04:25:22.382000Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "flutter",
        "platforms": [],
        "latestRelease": {
            "version": "com.example.dot_flutter_research@1.0.0+1"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "36",
            "slug": "pamafix-sap",
            "name": "pamafix-sap"
        },
        "teams": [
            {
                "id": "36",
                "slug": "pamafix-sap",
                "name": "pamafix-sap"
            }
        ],
        "id": "198",
        "name": "frontend-2",
        "slug": "frontend-2",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2025-08-21T04:00:11.983339Z",
        "environments": [
            "production",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2025-08-21T04:02:59.232000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [
            "javascript",
            "node"
        ],
        "latestRelease": {
            "version": "2fa6911b7e25290c79c2c491294d2f4e3f3266fc"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "37",
            "slug": "gontor-khizanatuna",
            "name": "gontor-khizanatuna"
        },
        "teams": [
            {
                "id": "37",
                "slug": "gontor-khizanatuna",
                "name": "gontor-khizanatuna"
            }
        ],
        "id": "143",
        "name": "gontor-khizanatuna-app",
        "slug": "gontor-khizanatuna-app",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2024-03-21T03:41:45.857885Z",
        "environments": [],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": null,
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "flutter",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "13",
            "slug": "dot-system",
            "name": "dot-system"
        },
        "teams": [
            {
                "id": "13",
                "slug": "dot-system",
                "name": "dot-system"
            }
        ],
        "id": "68",
        "name": "hiring-tools",
        "slug": "hiring-tools",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-11-15T03:13:03.904765Z",
        "environments": [
            "production",
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2022-11-15T03:16:19Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "other",
            "php"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "6",
            "slug": "smi-team",
            "name": "smi-team"
        },
        "teams": [
            {
                "id": "6",
                "slug": "smi-team",
                "name": "smi-team"
            }
        ],
        "id": "38",
        "name": "infralib-admin",
        "slug": "infralib-admin",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2022-10-04T08:59:57.054258Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2022-10-04T09:02:27Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "6",
            "slug": "smi-team",
            "name": "smi-team"
        },
        "teams": [
            {
                "id": "6",
                "slug": "smi-team",
                "name": "smi-team"
            }
        ],
        "id": "36",
        "name": "infralib-api",
        "slug": "infralib-api",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2022-10-04T07:55:42.223897Z",
        "environments": [
            "production",
            "develop",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2022-10-04T07:56:24Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "6",
            "slug": "smi-team",
            "name": "smi-team"
        },
        "teams": [
            {
                "id": "6",
                "slug": "smi-team",
                "name": "smi-team"
            }
        ],
        "id": "14",
        "name": "infralib-backoffice",
        "slug": "infralib-backoffice",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2022-09-28T03:32:20.781157Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2022-09-28T03:35:38.403262Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "6",
            "slug": "smi-team",
            "name": "smi-team"
        },
        "teams": [
            {
                "id": "6",
                "slug": "smi-team",
                "name": "smi-team"
            }
        ],
        "id": "87",
        "name": "infralib-backoffice-prod",
        "slug": "infralib-backoffice-prod",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2023-03-02T08:43:06.287033Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-03-06T03:51:54.580396Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "6",
            "slug": "smi-team",
            "name": "smi-team"
        },
        "teams": [
            {
                "id": "6",
                "slug": "smi-team",
                "name": "smi-team"
            }
        ],
        "id": "72",
        "name": "infralib-backoffice-stag",
        "slug": "infralib-backoffice-stag",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2022-12-15T08:44:31.654813Z",
        "environments": [
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2022-12-15T08:47:49.118125Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "6",
            "slug": "smi-team",
            "name": "smi-team"
        },
        "teams": [
            {
                "id": "6",
                "slug": "smi-team",
                "name": "smi-team"
            }
        ],
        "id": "15",
        "name": "infralib-landing-page",
        "slug": "infralib-landing-page",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2022-09-28T04:05:35.406645Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2022-09-30T07:17:03.671000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [],
        "latestRelease": {
            "version": "_XIeiAS4txhNBVDR0qxzd"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "6",
            "slug": "smi-team",
            "name": "smi-team"
        },
        "teams": [
            {
                "id": "6",
                "slug": "smi-team",
                "name": "smi-team"
            }
        ],
        "id": "86",
        "name": "infralib-landing-page-prod",
        "slug": "infralib-landing-page-prod",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2023-03-02T08:42:35.568584Z",
        "environments": [],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": null,
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "6",
            "slug": "smi-team",
            "name": "smi-team"
        },
        "teams": [
            {
                "id": "6",
                "slug": "smi-team",
                "name": "smi-team"
            }
        ],
        "id": "73",
        "name": "infralib-landing-page-stag",
        "slug": "infralib-landing-page-stag",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2022-12-16T02:18:44.010889Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2022-12-20T03:55:29.830000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [],
        "latestRelease": {
            "version": "_FwlzjLAkRCpwzAotDRd3"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "6",
            "slug": "smi-team",
            "name": "smi-team"
        },
        "teams": [
            {
                "id": "6",
                "slug": "smi-team",
                "name": "smi-team"
            }
        ],
        "id": "37",
        "name": "infralib-webapp",
        "slug": "infralib-webapp",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2022-10-04T08:53:34.710845Z",
        "environments": [
            "production",
            "local"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2022-10-04T08:54:16Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "1",
            "slug": "sentry",
            "name": "Sentry"
        },
        "teams": [
            {
                "id": "1",
                "slug": "sentry",
                "name": "Sentry"
            }
        ],
        "id": "1",
        "name": "Internal",
        "slug": "internal",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-09-23T06:19:01.015422Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2022-09-26T00:25:05.558260Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": null,
        "platforms": [
            "javascript"
        ],
        "latestRelease": {
            "version": "frontend@24.11.0+b494ab31b05e1308b8a854cea30ccb9b99be1610"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "41",
            "slug": "internal-web-dot",
            "name": "internal-web-dot"
        },
        "teams": [
            {
                "id": "41",
                "slug": "internal-web-dot",
                "name": "internal-web-dot"
            }
        ],
        "id": "157",
        "name": "internal-web-dot",
        "slug": "internal-web-dot",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2024-07-29T10:38:02.249587Z",
        "environments": [
            "production",
            "development",
            "vercel-production",
            "vercel-preview"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-07-30T03:08:10.485000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [
            "node",
            "javascript"
        ],
        "latestRelease": {
            "version": "d22483c6399dec63de60add6a06b130d55194e81"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "9",
            "slug": "kalla-team",
            "name": "kalla-team"
        },
        "teams": [
            {
                "id": "9",
                "slug": "kalla-team",
                "name": "kalla-team"
            }
        ],
        "id": "16",
        "name": "kalla-fullstack-dev",
        "slug": "kalla-fullstack-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-09-28T08:13:55.011456Z",
        "environments": [
            "develop",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2022-09-28T14:40:37.927000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": true,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": true,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node-nestjs",
        "platforms": [
            "other",
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "9",
            "slug": "kalla-team",
            "name": "kalla-team"
        },
        "teams": [
            {
                "id": "9",
                "slug": "kalla-team",
                "name": "kalla-team"
            }
        ],
        "id": "135",
        "name": "kalla-fullstack-new-dev",
        "slug": "kalla-fullstack-new-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-12-23T12:29:18.652642Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2024-01-12T08:23:56.122000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "9",
            "slug": "kalla-team",
            "name": "kalla-team"
        },
        "teams": [
            {
                "id": "9",
                "slug": "kalla-team",
                "name": "kalla-team"
            }
        ],
        "id": "124",
        "name": "kalla-fullstack-new-stag",
        "slug": "kalla-fullstack-new-stag",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-10-30T01:36:54.399475Z",
        "environments": [
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-10-30T04:18:00.801000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node-nestjs",
        "platforms": [
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "9",
            "slug": "kalla-team",
            "name": "kalla-team"
        },
        "teams": [
            {
                "id": "9",
                "slug": "kalla-team",
                "name": "kalla-team"
            }
        ],
        "id": "18",
        "name": "kalla-fullstack-prod",
        "slug": "kalla-fullstack-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-09-28T08:14:34.156750Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2022-09-29T09:35:49.674000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": true,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": true,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node-nestjs",
        "platforms": [
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "9",
            "slug": "kalla-team",
            "name": "kalla-team"
        },
        "teams": [
            {
                "id": "9",
                "slug": "kalla-team",
                "name": "kalla-team"
            }
        ],
        "id": "17",
        "name": "kalla-fullstack-stag",
        "slug": "kalla-fullstack-stag",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-09-28T08:14:13.756444Z",
        "environments": [
            "development",
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2022-09-28T10:01:59.983000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": true,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": true,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node-nestjs",
        "platforms": [
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "9",
            "slug": "kalla-team",
            "name": "kalla-team"
        },
        "teams": [
            {
                "id": "9",
                "slug": "kalla-team",
                "name": "kalla-team"
            }
        ],
        "id": "162",
        "name": "kalla-fullstack-staging-prod",
        "slug": "kalla-fullstack-staging-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2024-10-16T03:54:36.770351Z",
        "environments": [
            "development",
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2024-10-16T04:27:19.823000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "30",
            "slug": "kalla-property-team",
            "name": "kalla-property-team"
        },
        "teams": [
            {
                "id": "30",
                "slug": "kalla-property-team",
                "name": "kalla-property-team"
            }
        ],
        "id": "113",
        "name": "kalla-property-management-dev",
        "slug": "kalla-property-management-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-09-08T06:29:11.172485Z",
        "environments": [
            "production",
            "development",
            "local"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2023-09-11T06:18:07.943000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [
            "javascript",
            "node"
        ],
        "latestRelease": {
            "version": "24.8.6.0"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "30",
            "slug": "kalla-property-team",
            "name": "kalla-property-team"
        },
        "teams": [
            {
                "id": "30",
                "slug": "kalla-property-team",
                "name": "kalla-property-team"
            }
        ],
        "id": "120",
        "name": "kalla-property-management-prod",
        "slug": "kalla-property-management-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-10-18T03:12:27.810948Z",
        "environments": [
            "production",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-11-21T06:26:40.282000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [
            "javascript",
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "30",
            "slug": "kalla-property-team",
            "name": "kalla-property-team"
        },
        "teams": [
            {
                "id": "30",
                "slug": "kalla-property-team",
                "name": "kalla-property-team"
            }
        ],
        "id": "115",
        "name": "kalla-property-management-stag",
        "slug": "kalla-property-management-stag",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-09-25T12:48:02.764989Z",
        "environments": [
            "production",
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-09-25T14:25:56.911000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [
            "javascript",
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "9",
            "slug": "kalla-team",
            "name": "kalla-team"
        },
        "teams": [
            {
                "id": "9",
                "slug": "kalla-team",
                "name": "kalla-team"
            }
        ],
        "id": "13",
        "name": "kalla-superapp",
        "slug": "kalla-superapp",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-09-28T03:25:24.644802Z",
        "environments": [
            "production",
            "development",
            "staging",
            "prod",
            "staging2"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2022-09-28T08:06:39.289000Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "flutter",
        "platforms": [
            "native",
            "java",
            "other",
            "cocoa"
        ],
        "latestRelease": {
            "version": "com.kalla.friends.new.staging2@1.4.0+45"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "9",
            "slug": "kalla-team",
            "name": "kalla-team"
        },
        "teams": [
            {
                "id": "9",
                "slug": "kalla-team",
                "name": "kalla-team"
            }
        ],
        "id": "132",
        "name": "kalla-tmc-dev",
        "slug": "kalla-tmc-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-11-28T01:30:55.635641Z",
        "environments": [
            "production",
            "development",
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2023-11-28T12:01:33.046000Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "flutter",
        "platforms": [],
        "latestRelease": {
            "version": "1.0.1"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "51",
            "slug": "katim-team",
            "name": "katim-team"
        },
        "teams": [
            {
                "id": "51",
                "slug": "katim-team",
                "name": "katim-team"
            }
        ],
        "id": "202",
        "name": "katim-nms-ui",
        "slug": "katim-nms-ui",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-09-16T09:56:12.642822Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-09-17T06:02:36.347000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [
            "other"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "51",
            "slug": "katim-team",
            "name": "katim-team"
        },
        "teams": [
            {
                "id": "51",
                "slug": "katim-team",
                "name": "katim-team"
            }
        ],
        "id": "209",
        "name": "katim-x4",
        "slug": "katim-x4",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-10-14T03:22:19.682249Z",
        "environments": [],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": null,
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "flutter",
        "platforms": [
            "other"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "43",
            "slug": "kpp-invent-team",
            "name": "kpp-invent"
        },
        "teams": [
            {
                "id": "43",
                "slug": "kpp-invent-team",
                "name": "kpp-invent"
            }
        ],
        "id": "160",
        "name": "kpp-invent-backend-dev",
        "slug": "kpp-invent-backend-dev",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2024-10-11T07:01:28.442937Z",
        "environments": [
            "Development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-10-15T02:08:06.780562Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": true,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "dotnet",
        "platforms": [
            "csharp"
        ],
        "latestRelease": {
            "version": "KPPInvent@1.0.0+8d65d8cc458145df3dd3be3915b0d40dacee8783"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "43",
            "slug": "kpp-invent-team",
            "name": "kpp-invent"
        },
        "teams": [
            {
                "id": "43",
                "slug": "kpp-invent-team",
                "name": "kpp-invent"
            }
        ],
        "id": "161",
        "name": "kpp-invent-frontend-dev",
        "slug": "kpp-invent-frontend-dev",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2024-10-11T07:02:03.083832Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-10-15T02:51:49.699000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [],
        "latestRelease": {
            "version": "oJ2HNEoNankS8poGcvtMP"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "21",
            "slug": "riset",
            "name": "riset"
        },
        "teams": [
            {
                "id": "21",
                "slug": "riset",
                "name": "riset"
            }
        ],
        "id": "79",
        "name": "laravel-riset",
        "slug": "laravel-riset",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2023-01-10T02:45:58.116750Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-12-10T12:59:52.773332Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": true,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "other"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "54",
            "slug": "mind-p3mo",
            "name": "mind-p3mo"
        },
        "teams": [
            {
                "id": "54",
                "slug": "mind-p3mo",
                "name": "mind-p3mo"
            }
        ],
        "id": "210",
        "name": "mind-id-p3mo-backend-dev",
        "slug": "mind-id-p3mo-backend-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-10-22T05:12:05.259521Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-11-03T07:19:17.131000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node-nestjs",
        "platforms": [
            "other",
            "node"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "54",
            "slug": "mind-p3mo",
            "name": "mind-p3mo"
        },
        "teams": [
            {
                "id": "54",
                "slug": "mind-p3mo",
                "name": "mind-p3mo"
            }
        ],
        "id": "211",
        "name": "mind-id-p3mo-frontend-dev",
        "slug": "mind-id-p3mo-frontend-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2025-11-05T02:53:08.475290Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2025-11-06T01:13:32.147000Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-react",
        "platforms": [
            "javascript",
            "other"
        ],
        "latestRelease": {
            "version": "18c4f85e866e7bdda2ad93f8bccec62321a7a9ad"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "39",
            "slug": "mind-pensiun-team",
            "name": "mind-pensiun-team"
        },
        "teams": [
            {
                "id": "39",
                "slug": "mind-pensiun-team",
                "name": "mind-pensiun-team"
            }
        ],
        "id": "145",
        "name": "mind-id-pensiun-sukarela-dev",
        "slug": "mind-id-pensiun-sukarela-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2024-04-18T04:12:38.609579Z",
        "environments": [
            "production",
            "development",
            "local"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2024-05-21T00:47:27.255538Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "other",
            "javascript",
            "php"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "39",
            "slug": "mind-pensiun-team",
            "name": "mind-pensiun-team"
        },
        "teams": [
            {
                "id": "39",
                "slug": "mind-pensiun-team",
                "name": "mind-pensiun-team"
            }
        ],
        "id": "149",
        "name": "mind-id-pensiun-sukarela-prod",
        "slug": "mind-id-pensiun-sukarela-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2024-06-15T01:17:42.517030Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2024-06-18T09:01:38.333684Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": true,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "javascript",
            "php",
            "other"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "39",
            "slug": "mind-pensiun-team",
            "name": "mind-pensiun-team"
        },
        "teams": [
            {
                "id": "39",
                "slug": "mind-pensiun-team",
                "name": "mind-pensiun-team"
            }
        ],
        "id": "146",
        "name": "mind-id-pensiun-sukarela-stag",
        "slug": "mind-id-pensiun-sukarela-stag",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2024-05-29T07:38:44.922807Z",
        "environments": [
            "staging",
            "stagging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2024-06-04T07:29:02.740550Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "other"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "38",
            "slug": "mind-portal-team",
            "name": "mind-portal-team"
        },
        "teams": [
            {
                "id": "38",
                "slug": "mind-portal-team",
                "name": "mind-portal-team"
            }
        ],
        "id": "144",
        "name": "mind-id-portal-recruitment-dev",
        "slug": "mind-id-portal-recruitment-dev",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2024-04-17T07:44:15.843525Z",
        "environments": [
            "production",
            "development",
            "prod",
            "stdio"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-05-17T10:16:24.606000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node-nestjs",
        "platforms": [
            "javascript",
            "node"
        ],
        "latestRelease": {
            "version": "0.23.0"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "38",
            "slug": "mind-portal-team",
            "name": "mind-portal-team"
        },
        "teams": [
            {
                "id": "38",
                "slug": "mind-portal-team",
                "name": "mind-portal-team"
            }
        ],
        "id": "150",
        "name": "mind-id-portal-recruitment-landing-page-dev",
        "slug": "mind-id-portal-recruitment-landing-page-dev",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2024-06-27T06:27:03.472430Z",
        "environments": [
            "production",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-06-28T09:39:40.261000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [
            "other"
        ],
        "latestRelease": {
            "version": "nUYdXQ6pX1pq1UCgFq442"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "38",
            "slug": "mind-portal-team",
            "name": "mind-portal-team"
        },
        "teams": [
            {
                "id": "38",
                "slug": "mind-portal-team",
                "name": "mind-portal-team"
            }
        ],
        "id": "154",
        "name": "mind-id-portal-recruitment-landing-page-prod",
        "slug": "mind-id-portal-recruitment-landing-page-prod",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2024-07-11T02:11:51.898667Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-07-16T13:55:21.187000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [
            "node",
            "javascript",
            "other"
        ],
        "latestRelease": {
            "version": "dmJl0mCo7YvFS8bX4-22K"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "38",
            "slug": "mind-portal-team",
            "name": "mind-portal-team"
        },
        "teams": [
            {
                "id": "38",
                "slug": "mind-portal-team",
                "name": "mind-portal-team"
            }
        ],
        "id": "151",
        "name": "mind-id-portal-recruitment-landing-page-stag",
        "slug": "mind-id-portal-recruitment-landing-page-stag",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2024-06-27T09:45:43.187573Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-07-01T04:21:36.677000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": false,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [
            "other"
        ],
        "latestRelease": {
            "version": "qTfXnxgJKNa9qLfE-uRqz"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "38",
            "slug": "mind-portal-team",
            "name": "mind-portal-team"
        },
        "teams": [
            {
                "id": "38",
                "slug": "mind-portal-team",
                "name": "mind-portal-team"
            }
        ],
        "id": "153",
        "name": "mind-id-portal-recruitment-prod",
        "slug": "mind-id-portal-recruitment-prod",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2024-07-11T01:54:46.611762Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-07-17T12:47:59.699000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node-nestjs",
        "platforms": [
            "javascript",
            "node",
            "other"
        ],
        "latestRelease": {
            "version": "25.8.4.0"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "38",
            "slug": "mind-portal-team",
            "name": "mind-portal-team"
        },
        "teams": [
            {
                "id": "38",
                "slug": "mind-portal-team",
                "name": "mind-portal-team"
            }
        ],
        "id": "148",
        "name": "mind-id-portal-recruitment-stag",
        "slug": "mind-id-portal-recruitment-stag",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2024-06-07T14:09:16.996140Z",
        "environments": [
            "production",
            "staging"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2024-06-11T06:14:49.739000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": true,
        "hasInsightsDb": true,
        "hasInsightsAssets": true,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": true,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node-nestjs",
        "platforms": [
            "javascript",
            "node",
            "other"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "19",
            "slug": "muslimnesia-team",
            "name": "muslimnesia-team"
        },
        "teams": [
            {
                "id": "19",
                "slug": "muslimnesia-team",
                "name": "muslimnesia-team"
            }
        ],
        "id": "81",
        "name": "muslimnesia-backend-dev",
        "slug": "muslimnesia-backend-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-02-14T05:14:56.334335Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-02-14T05:15:40Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "19",
            "slug": "muslimnesia-team",
            "name": "muslimnesia-team"
        },
        "teams": [
            {
                "id": "19",
                "slug": "muslimnesia-team",
                "name": "muslimnesia-team"
            }
        ],
        "id": "69",
        "name": "muslimnesia-backend-prod",
        "slug": "muslimnesia-backend-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2022-11-15T05:35:50.389840Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2022-11-15T08:02:27Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "19",
            "slug": "muslimnesia-team",
            "name": "muslimnesia-team"
        },
        "teams": [
            {
                "id": "19",
                "slug": "muslimnesia-team",
                "name": "muslimnesia-team"
            }
        ],
        "id": "84",
        "name": "muslimnesia-mobile-dev",
        "slug": "muslimnesia-mobile-dev",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-02-20T08:20:49.681441Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2023-02-22T09:07:17.939000Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "react-native",
        "platforms": [],
        "latestRelease": {
            "version": "org.dot.nafis.muslimnesia@1.13.11+4"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "19",
            "slug": "muslimnesia-team",
            "name": "muslimnesia-team"
        },
        "teams": [
            {
                "id": "19",
                "slug": "muslimnesia-team",
                "name": "muslimnesia-team"
            }
        ],
        "id": "83",
        "name": "muslimnesia-mobile-prod",
        "slug": "muslimnesia-mobile-prod",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2023-02-20T08:20:10.315294Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2023-02-22T09:34:03.497000Z",
        "firstTransactionEvent": false,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "react-native",
        "platforms": [],
        "latestRelease": {
            "version": "org.dot.nafis.muslimnesia@2.0.0+425"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "33",
            "slug": "myits-research",
            "name": "myits-research"
        },
        "teams": [
            {
                "id": "33",
                "slug": "myits-research",
                "name": "myits-research"
            }
        ],
        "id": "136",
        "name": "myits-research-v2",
        "slug": "myits-research-v2",
        "isBookmarked": false,
        "isMember": false,
        "access": [],
        "hasAccess": false,
        "dateCreated": "2024-01-08T04:19:50.465549Z",
        "environments": [
            "production",
            "develop",
            "development",
            "local"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2024-01-08T04:23:53.407894Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": true,
        "hasInsightsLlmMonitoring": false,
        "platform": "php-laravel",
        "platforms": [
            "php"
        ],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "21",
            "slug": "riset",
            "name": "riset"
        },
        "teams": [
            {
                "id": "21",
                "slug": "riset",
                "name": "riset"
            }
        ],
        "id": "76",
        "name": "nest-riset",
        "slug": "nest-riset",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2023-01-10T02:44:00.056101Z",
        "environments": [
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2023-01-12T02:58:14.491000Z",
        "firstTransactionEvent": false,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "21",
            "slug": "riset",
            "name": "riset"
        },
        "teams": [
            {
                "id": "21",
                "slug": "riset",
                "name": "riset"
            }
        ],
        "id": "156",
        "name": "nextjs-fullstack",
        "slug": "nextjs-fullstack",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2024-07-26T08:33:39.578316Z",
        "environments": [
            "production",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-09-09T04:20:35.488000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [],
        "latestRelease": {
            "version": "2QfDVvFpv2mVsDf2oz9h8"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "21",
            "slug": "riset",
            "name": "riset"
        },
        "teams": [
            {
                "id": "21",
                "slug": "riset",
                "name": "riset"
            }
        ],
        "id": "155",
        "name": "nextjs-sentry-test",
        "slug": "nextjs-sentry-test",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2024-07-12T09:44:30.473708Z",
        "environments": [
            "production"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2024-07-17T01:56:52.931000Z",
        "firstTransactionEvent": true,
        "hasSessions": true,
        "hasProfiles": false,
        "hasReplays": true,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [],
        "latestRelease": {
            "version": "TJ5XKaP2v563wwa0lREOn"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "21",
            "slug": "riset",
            "name": "riset"
        },
        "teams": [
            {
                "id": "21",
                "slug": "riset",
                "name": "riset"
            }
        ],
        "id": "77",
        "name": "next-riset",
        "slug": "next-riset",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2023-01-10T02:45:10.123129Z",
        "environments": [
            "production",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons",
            "releases"
        ],
        "firstEvent": "2023-09-25T06:39:26.662000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": false,
        "hasInsightsHttp": false,
        "hasInsightsDb": false,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "javascript-nextjs",
        "platforms": [],
        "latestRelease": {
            "version": "guN-m2COQ5syaHf9QzKFZ"
        },
        "hasUserReports": false,
        "latestDeploys": null
    },
    {
        "team": {
            "id": "22",
            "slug": "boilerplate-team",
            "name": "boilerplate-team"
        },
        "teams": [
            {
                "id": "22",
                "slug": "boilerplate-team",
                "name": "boilerplate-team"
            }
        ],
        "id": "194",
        "name": "node-example",
        "slug": "node-example",
        "isBookmarked": false,
        "isMember": true,
        "access": [
            "event:read",
            "alerts:read",
            "project:releases",
            "org:read",
            "member:read",
            "team:read",
            "project:read",
            "event:write"
        ],
        "hasAccess": true,
        "dateCreated": "2025-07-24T01:42:23.039160Z",
        "environments": [
            "production",
            "development"
        ],
        "eventProcessing": {
            "symbolicationDegraded": false
        },
        "features": [
            "data-forwarding",
            "rate-limits",
            "custom-inbound-filters",
            "discard-groups",
            "servicehooks",
            "alert-filters",
            "first-event-severity-new-escalation",
            "minidump",
            "race-free-group-creation",
            "span-metrics-extraction",
            "span-metrics-extraction-addons"
        ],
        "firstEvent": "2025-07-24T02:00:35.509000Z",
        "firstTransactionEvent": true,
        "hasSessions": false,
        "hasProfiles": false,
        "hasReplays": false,
        "hasFeedbacks": false,
        "hasNewFeedbacks": false,
        "hasCustomMetrics": false,
        "hasMonitors": false,
        "hasMinifiedStackTrace": true,
        "hasInsightsHttp": false,
        "hasInsightsDb": true,
        "hasInsightsAssets": false,
        "hasInsightsAppStart": false,
        "hasInsightsScreenLoad": false,
        "hasInsightsVitals": false,
        "hasInsightsCaches": false,
        "hasInsightsQueues": false,
        "hasInsightsLlmMonitoring": false,
        "platform": "node",
        "platforms": [],
        "latestRelease": null,
        "hasUserReports": false,
        "latestDeploys": null
    }
]
```

## Implementation

- create database schema about this project based on example response
- create `types` based on example response
- create `services` (im already create some service, check on `./services/sentry/projects.ts`, refactor it)
- in `app/settings/page.tsx`, implement list of project with pagination, search & filter
- add top button for sync project from sentry with in database
