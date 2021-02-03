# auro-flight

Auro-flight encapsulates Alaska's flight result logic.
A departure station and an arrival station are displayed in tandem with all sectors of the flight in an <auro-flightline> component.
Department of Transportation regulations mandate that the arrival and departure cities' font size and color be identical to the 
operational disclosures (for instance, AA 3210 is operated by Envoy Air on behalf of American Airlines).



<div class="exampleWrapper">
          <auro-flight 
            flights='["AS 9999"]' 
            duration="1h 99m" 
            daysChanged="2"
            departureTime="2:55 pm"
            departureStation="PVD"
            arrivalTime="5:10 pm"
            arrivalStation="ORD"
            >
              Hello World!
          </auro-flight>
    </div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
          <auro-flight 
            flights='["AS 9999"]' 
            duration="1h 99m" 
            daysChanged="2"
            departureTime="2:55 pm"
            departureStation="PVD"
            arrivalTime="5:10 pm"
            arrivalStation="ORD"
            >
              Hello World!
          </auro-flight>
  ```

</auro-accordion>

<div class="exampleWrapper">
          <auro-flight 
            flights='["AS 9999"]' 
            duration="1h 99m" 
            daysChanged="1"
            departureTime="2:55 pm"
            departureStation="PVD"
            arrivalTime="5:10 pm"
            arrivalStation="ORD"
            >
              Hello World!
          </auro-flight>
    </div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
          <auro-flight 
            flights='["AS 9999"]' 
            duration="1h 99m" 
            daysChanged="2"
            departureTime="2:55 pm"
            departureStation="PVD"
            arrivalTime="5:10 pm"
            arrivalStation="ORD"
            >
              Hello World!
          </auro-flight>
  ```

</auro-accordion>

<div class="exampleWrapper">
          <auro-flight 
            flights='["AS 9999", "EK9876"]' 
            duration="1h 99m" 
            daysChanged="0"
            departureTime="2:55 pm"
            departureStation="DXB"
            arrivalTime="5:10 pm"
            arrivalStation="SEA"
            >
              Hello World!
          </auro-flight>
    </div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
          <auro-flight 
            flights='["AS 9999"]' 
            duration="1h 99m" 
            daysChanged="2"
            departureTime="2:55 pm"
            departureStation="PVD"
            arrivalTime="5:10 pm"
            arrivalStation="ORD"
            >
              Hello World!
          </auro-flight>
  ```

</auro-accordion>
