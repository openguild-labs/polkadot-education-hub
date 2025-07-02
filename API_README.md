# Polkadot Education Hub API Documentation

Welcome to the Polkadot Education Hub API! This documentation will help you understand and use the available endpoints to access educational content.

## Base URL

All API requests should be made to:
```
https://learn.openguild.wtf/api
```

## Authentication

Currently, all endpoints are publicly accessible and do not require authentication.

## Rate Limiting

To ensure fair usage, the API is rate limited. Please implement appropriate caching on your end if you need to make frequent requests.

## Endpoints

### 1. Get All Videos

Retrieves all available videos categorized by type.

```http
GET /api/courses
```

#### Response

```json
{
  "success": true,
  "data": {
    "communityCallVideos": [...],
    "generalVideos": [...],
    "technicalVideos": [...]
  },
  "count": 42
}
```

### 2. Get All Workshops

Retrieves all available workshops.

```http
GET /api/workshops
```

#### Response

```json
{
  "success": true,
  "data": [
    {
      "title": "Workshop Title",
      "description": "Workshop description...",
      "url": "https://...",
      "img": "/path/to/image.png",
      "released": true
    }
    // ... more workshops
  ],
  "count": 15
}
```

### 3. Get Research Articles

Retrieves all available research articles.

```http
GET /api/educations
```

#### Response

```json
{
  "success": true,
  "data": [
    {
      "title": "Article Title",
      "description": "Article description...",
      "url": "https://..."
    }
    // ... more articles
  ],
  "count": 8
}
```

## Error Handling

All endpoints return a consistent error format:

```json
{
  "success": false,
  "error": "Error Type",
  "message": "Human-readable error message"
}
```

### Common HTTP Status Codes

- `200`: Success
- `400`: Bad Request - The request was invalid
- `404`: Not Found - The requested resource was not found
- `500`: Internal Server Error - Something went wrong on the server

## Examples

### Fetching all videos using JavaScript (Browser)

```javascript
async function fetchVideos() {
  try {
    const response = await fetch('https://learn.openguild.wtf/api/courses');
    const data = await response.json();
    
    if (data.success) {
      console.log('Total videos:', data.count);
      console.log('Technical videos:', data.data.technicalVideos);
    } else {
      console.error('Error:', data.error);
    }
  } catch (error) {
    console.error('Failed to fetch videos:', error);
  }
}
```

### Fetching workshops using cURL

```bash
curl https://learn.openguild.wtf/api/workshops
```

## Versioning

This is version 1 of the API. Future versions will be introduced with backward compatibility in mind.

## Support

For any questions or issues, please contact the OpenGuild team.

## License

This API is provided by OpenGuild under the [MIT License](LICENSE).
