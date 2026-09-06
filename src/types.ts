export interface Property {
  id: string;
  name: string;
  location: string;
  subLocation: string;
  neighborhood: 'South Mumbai' | 'Worli' | 'Bandra' | 'Juhu' | 'Prabhadevi' | 'Lower Parel' | 'Powai';
  propertyType: 'Penthouse' | 'Seafront Residence' | 'Duplex' | 'Private Sky Villa' | 'Signature Estate';
  configuration: string; // e.g. "4 BHK Penthouse", "5 BHK Seafront Duplex"
  carpetArea: string; // e.g. "4,850 sq.ft."
  indicativePrice: string; // e.g. "₹ 38.5 Cr" or "Price on Request"
  shortPositioning: string;
  overview: string;
  architectureHighlights: string[];
  features: string[];
  imageUrl: string;
  galleryUrls: string[];
  floor: string;
  facing: string;
  status: 'Private Listing' | 'Curated Opportunity' | 'Exclusive Advisory';
}

export interface MumbaiLocation {
  id: string;
  name: string;
  tagline: string;
  character: string;
  description: string;
  keyEnclaves: string[];
  imageUrl: string;
  averageCadence: string;
}

export interface Principle {
  number: string;
  title: string;
  description: string;
  pillar: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface CareerExperience {
  company: string;
  role: string;
  scope: string;
  domain: string;
}

export interface EnquiryData {
  fullName: string;
  email: string;
  phone: string;
  propertyInterest: string;
  preferredLocation: string;
  budgetRange: string;
  message: string;
}
