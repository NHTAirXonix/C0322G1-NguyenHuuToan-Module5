import {RentType} from './rent-type.model';
import {FacilityType} from './facility-type.model';

export interface FacilityI {
  id?: number;
  name?: string;
  area?: number;
  cost?: number;
  people?: number;
  standard?: string;
  decription?: string;
  poolArea?: number;
  floor?: number;
  facilityFree?: string;
  urlImg?: string;
  status?: boolean;
  rentType?: RentType;
  facilityType?: FacilityType;
}
