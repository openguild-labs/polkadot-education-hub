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

## Learning Resource Structure

Learning resources in the Polkadot Education Hub share a common data structure:

```json
{
  "Course Name": "Resource Title",
  "Status": "NOT_STARTED | IN_PROGRESS | COMPLETED",
  "Third-party source": "Yes | No",
  "Link": "https://resource-url.com",
  "Category": "tutorial | documentation | repository | article | community | case-study | proposal",
  "Level": "BEGINNER | INTERMEDIATE | ADVANCED",
  "Language": "English",
  "Source": "Source Organization",
  "Bundle Name": "Bundle Category",
  "Description": "Detailed description of the learning resource"
}
```

## Endpoints

### 1. Get All Courses

Retrieves all available courses.

```http
GET /api/courses
```

#### Response

```json
{
  "success": true,
  "data": [
    {
      "title": "Course Title",
      "description": "Course description...",
      "url": "https://...",
      "img": "/path/to/image.png",
      "released": true
    }
  ],
  "count": 1
}
```

### 2. Get All Videos

Retrieves all available videos categorized by type.

```http
GET /api/videos
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

### 3. Get All Workshops

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
  ],
  "count": 1
}
```

### 4. Get Research Articles

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
  ],
  "count": 1
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

### Fetching all courses using JavaScript (Browser)

```javascript
async function fetchCourses() {
  try {
    const response = await fetch('https://learn.openguild.wtf/api/courses');
    const data = await response.json();
    
    if (data.success) {
      console.log('Total courses:', data.count);
      console.log('Courses:', data.data);
    } else {
      console.error('Error:', data.error);
    }
  } catch (error) {
    console.error('Failed to fetch courses:', error);
  }
}
```

### Fetching videos using cURL

```bash
curl https://learn.openguild.wtf/api/videos
```

## Versioning

This is version 1 of the API. Future versions will be introduced with backward compatibility in mind.

## Support

For any questions or issues, please contact the OpenGuild team.

## License

This API is provided by OpenGuild under the [MIT License](LICENSE).
