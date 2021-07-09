import {gql} from '@apollo/client';

export const GET_MISSIONS = gql`
  query getLaunchesPast($offset: Int, $limit: Int) {
    launchesPast(offset: $offset, limit: $limit) {
      id
      mission_name
    }
  }
`;

export const GET_MISSION = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;
