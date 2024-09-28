# Brewery Explorer

Brewery Explorer is a web application that allows users to discover and explore breweries, view their details, and manage events associated with them. This project is built using Next.js and integrates with a database to store and retrieve brewery and event information.

## Features

- Browse breweries
- View detailed information about each brewery
- See upcoming events at breweries
- Interactive map showing brewery locations
- User authentication
- Event management (creation and deletion)

## Technologies Used

- Next.js
- React
- MongoDB (assumed based on the use of Mongoose models)
- Tailwind CSS (for styling)

## Components

- `BreweryHeader`: Displays the header information for a brewery
- `EventCard`: Shows details of an event
- `BreweryMap`: Renders a map with the brewery's location
- `BrewDescCard`: Displays a description card for the brewery
- `BreweryImages`: Handles the display of brewery images (currently commented out)

## Models

- `Brewery`: Represents a brewery in the database
- `Event`: Represents an event associated with a brewery

## Utilities

- `convertToSerializedObject`: Converts database objects to serialized format
- `getSessionUser`: Retrieves the current user session

## Actions

- `deleteEvent`: Handles the deletion of events

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your MongoDB database and update the connection string
4. Run the development server with `npm run dev`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

