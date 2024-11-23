export interface PropertyDetails {
  name: string;
  status: PropertyStatus;
  image: string;
  type: PropertyType;
  description: string;
  location: string;
  info: {
    noOfBedRooms: number;
    sqft: number;
    noOfBaths: number;
  };
}

export enum PropertyStatus {
  COMPLETED = "COMPLETED",
  UPCOMING = "UPCOMING",
}

export enum PropertyType {
  VILLA = "Villa",
  PLOT = "Plot",
  RESIDENTIAL = "Residential",
  COMMERCIAL = "Commercial",
}
