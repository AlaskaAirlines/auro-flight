# auro-flight

Auro-flight encapsulates Alaska's flight result logic.
A departure station and an arrival station are displayed in tandem with all sectors of the flight in an `<auro-flightline>` component.
Department of Transportation regulations mandate that the arrival and departure cities' font size and color be identical to the operational disclosures (for instance, AA 3210 is operated by Envoy Air on behalf of American Airlines).


## Mainline Nonstop (SEAEWR)

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 8"]' 
    duration="5h 25m" 
    daysChanged="0"
    departureTime="7:30 am"
    departureStation="SEA"
    arrivalTime="3:55 pm"
    arrivalStation="EWR"
    >
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 8"]' 
      duration="5h 25m" 
      daysChanged="0"
      departureTime="7:30 am"
      departureStation="SEA"
      arrivalTime="3:55 pm"
      arrivalStation="EWR"
      >
    </auro-flight>
  ```

</auro-accordion>

## Mainline next day arr/dep (KOASEA)

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 880"]' 
    duration="5h 45m" 
    daysChanged="1"
    departureTime="10:50 pm"
    departureStation="KOA"
    arrivalTime="6:35 am"
    arrivalStation="SEA"
    >
      Hello World!
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 880"]' 
      duration="5h 45m" 
      daysChanged="1"
      departureTime="10:50 pm"
      departureStation="KOA"
      arrivalTime="6:35 am"
      arrivalStation="SEA"
      >
        Hello World!
    </auro-flight>
  ```

</auro-accordion>

## Mainline One-stop (ANCADK)

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 184"]' 
    duration="3h 55m" 
    daysChanged="0"
    departureTime="10:10 am"
    departureStation="ANC"
    arrivalTime="1:05 pm"
    arrivalStation="ADK"
    >
      Hello World!
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 184"]' 
      duration="3h 55m" 
      daysChanged="0"
      departureTime="10:10 am"
      departureStation="ANC"
      arrivalTime="1:05 pm"
      arrivalStation="ADK"
      >
        Hello World!
    </auro-flight>
  ```

</auro-accordion>

## Mainline Two-stop (WRGANC)

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 65"]' 
    duration="4h 23m" 
    daysChanged="0"
    departureTime="10:30 am"
    departureStation="KTN"
    arrivalTime="2:53 pm"
    arrivalStation="ANC"
    >
      Hello World!
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 65"]' 
      duration="4h 23m" 
      daysChanged="0"
      departureTime="10:30 am"
      departureStation="KTN"
      arrivalTime="2:53 pm"
      arrivalStation="ANC"
      >
        Hello World!
    </auro-flight>
  ```

</auro-accordion>

## Mainline Three-stop (KTNANC)

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 65"]' 
    duration="5h 53m" 
    daysChanged="0"
    departureTime="9:00 am"
    departureStation="KTN"
    arrivalTime="2:53 pm"
    arrivalStation="ANC"
    >
      Hello World!
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 65"]' 
      duration="5h 53m" 
      daysChanged="0"
      departureTime="9:00 am"
      departureStation="KTN"
      arrivalTime="2:53 pm"
      arrivalStation="ANC"
      >
        Hello World!
    </auro-flight>
  ```

</auro-accordion>

## Government Approval (DXBCPT)

<div class="exampleWrapper">
  <auro-flight 
    flights='["EK 772"]' 
    duration="9h 45m" 
    daysChanged="0"
    departureTime="3:50 am"
    departureStation="DXB"
    arrivalTime="11:35 am"
    arrivalStation="CPT"
    >
      EK 772 is subject to government approval
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["EK 772"]' 
      duration="9h 45m" 
      daysChanged="0"
      departureTime="3:50 am"
      departureStation="DXB"
      arrivalTime="11:35 am"
      arrivalStation="CPT"
      >
        EK 772 is subject to government approval
    </auro-flight>
  ```

</auro-accordion>

## Change of Gauge (SEASJD)
#### [Change of Gauge](https://www.travelweekly.com/Mark-Pestronk/Agents-must-identify-change-of-gauge-services) flights are flight with the same flight number, but with an equipment swap at a intermediate stop. This is a pain point for guests with physical disabilities whom may not expect to need to depart the aircraft. Even with the physical change of planes, these flights are still considered Direct. Qantas runs a COG JFK-SYD.

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 200"]' 
    duration="4h 20m" 
    daysChanged="0"
    departureTime="6:00 am"
    departureStation="SEA"
    arrivalTime="11:20 am"
    arrivalStation="SJD"
    >
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 200"]' 
      duration="4h 20m" 
      daysChanged="0"
      departureTime="6:00 am"
      departureStation="SEA"
      arrivalTime="11:20 am"
      arrivalStation="SJD"
      >
    </auro-flight>
  ```

</auro-accordion>

## First Class/Premium Class Upgrade Fare (JNUCDV)
#### Our Mileage Plan guests have access to Upgrade Fares, which places them in either a confirmed seat if available or a priority list awaiting a seat upgrade gateside.

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 73"]' 
    duration="1h 40m" 
    daysChanged="0"
    departureTime="7:45 am"
    departureStation="JNU"
    arrivalTime="9:25 am"
    arrivalStation="CDV"
    >
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 73"]' 
      duration="1h 40m" 
      daysChanged="0"
      departureTime="7:45 am"
      departureStation="JNU"
      arrivalTime="9:25 am"
      arrivalStation="CDV"
      >
    </auro-flight>
  ```

</auro-accordion>

## Regional Nonstop (ALWSEA)
#### AlaskaHorizon, AlaskaSkyWest, American Eagle, Delta Connection, QantasLink, and United Express fares are sold as mainline tickets operated by Part 131 air carriers doing business as the mainline. DoT regulates the disclosure of this instance.
<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 2087"]' 
    duration="1h 3m" 
    daysChanged="0"
    departureTime="5:25 am"
    departureStation="ALW"
    arrivalTime="6:28 am"
    arrivalStation="SEA"
    >
      AS 2087 is operated by Horizon Air as AlaskaHorizon
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 2087"]' 
      duration="1h 3m" 
      daysChanged="0"
      departureTime="5:25 am"
      departureStation="ALW"
      arrivalTime="6:28 am"
      arrivalStation="SEA"
      >
        AS 2087 is operated by Horizon Air as AlaskaHorizon
    </auro-flight>
  ```

</auro-accordion>

## Flight under 1 hour / Shuttle Market (SEAPDX)

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 2326"]' 
    duration="0h 49m" 
    daysChanged="0"
    departureTime="6:00 am"
    departureStation="SEA"
    arrivalTime="6:49 am"
    arrivalStation="PDX"
    >
      AS 2326 is operated by Horizon Air as AlaskaHorizon
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 2326"]' 
      duration="0h 49m" 
      daysChanged="0"
      departureTime="6:00 am"
      departureStation="SEA"
      arrivalTime="6:49 am"
      arrivalStation="PDX"
      >
        AS 2326 is operated by Horizon Air as AlaskaHorizon
    </auro-flight>
  ```

</auro-accordion>

## Mainline + Mainline Connection (ANCBOS)

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 110", "AS 12"]' 
    duration="11h 5m" 
    daysChanged="0"
    departureTime="12:45 am"
    departureStation="ANC"
    arrivalTime="3:50 pm"
    arrivalStation="BOS"
    >
      
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 110", "AS 12"]' 
      duration="11h 5m" 
      daysChanged="0"
      departureTime="12:45 am"
      departureStation="ANC"
      arrivalTime="3:50 pm"
      arrivalStation="BOS"
      >
        
    </auro-flight>
  ```

</auro-accordion>


## Mainline + Mainline Connection, Next Day (KOADEN)

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 988", "AS 682"]' 
    duration="22h 28m" 
    daysChanged="1"
    departureTime="10:00 am"
    departureStation="KOA"
    arrivalTime="11:28 am"
    arrivalStation="DEN"
    >
      
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 988", "AS 682"]' 
      duration="22h 28m" 
      daysChanged="1"
      departureTime="10:00 am"
      departureStation="KOA"
      arrivalTime="11:28 am"
      arrivalStation="DEN"
      >
        
    </auro-flight>
  ```

</auro-accordion>

## Mainline + Mainline Stopover Connection (KOAADK)

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 873", "AS 184"]' 
    duration="22h 45m" 
    daysChanged="1"
    departureTime="2:20 pm"
    departureStation="KOA"
    arrivalTime="1:05 pm"
    arrivalStation="ADK"
    >
      
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 873", "AS 184"]' 
      duration="22h 45m" 
      daysChanged="1"
      departureTime="2:20 pm"
      departureStation="KOA"
      arrivalTime="1:05 pm"
      arrivalStation="ADK"
      >
        
    </auro-flight>
  ```

</auro-accordion>


## Mainline + Regional Connection (SEAAVP)

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 34", "AA 3893"]' 
    duration="8h 42m" 
    daysChanged="0"
    departureTime="8:10 am"
    departureStation="SEA"
    arrivalTime="7:52 pm"
    arrivalStation="AVP"
    >
      AA 3893 is operated by Envoy Air on behalf of American Airlines: ORD - AVP
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 34", "AA 3893"]' 
      duration="8h 42m" 
      daysChanged="0"
      departureTime="8:10 am"
      departureStation="SEA"
      arrivalTime="7:52 pm"
      arrivalStation="AVP"
      >
        AA 3893 is operated by Envoy Air on behalf of American Airlines: ORD - AVP
    </auro-flight>
  ```

</auro-accordion>

## Codeshare + Mainline + Regional Connection (DXBALW)

<div class="exampleWrapper">
  <auro-flight 
    flights='["EK 231", "AS 1085", "AS 2086"]' 
    duration="33h 19m" 
    daysChanged="0"
    departureTime="2:25 am"
    departureStation="DXB"
    arrivalTime="11:44 pm"
    arrivalStation="ALW"
    >
      EK 231 is operated by Emirates: DXB - LAX
      AS 1085 is operated by Alaska Airlines: LAX - SEA
      AS 2086 is operated by Horizon Air as AlaskaHorizon: SEA - ALW
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["EK 231", "AS 1085", "AS 2086"]' 
      duration="33h 19m" 
      daysChanged="0"
      departureTime="2:25 am"
      departureStation="DXB"
      arrivalTime="11:44 pm"
      arrivalStation="ALW"
      >
        EK 231 is operated by Emirates: DXB - LAX
        AS 1085 is operated by Alaska Airlines: LAX - SEA
        AS 2086 is operated by Horizon Air as AlaskaHorizon: SEA - ALW
    </auro-flight>
  ```

## Single Regional, Multiple Partner (ALWCPT)

<div class="exampleWrapper">
  <auro-flight 
    flights='["AS 2087", "EK 230", "EK 772"]' 
    duration="42h 35m" 
    daysChanged="2"
    departureTime="6:00 am"
    departureStation="ALW"
    arrivalTime="10:35 am"
    arrivalStation="CPT"
    >
      AS 2087 is operated by Horizon Air as AlaskaHorizon: ALW - SEA
      EK 230, 772 are operated by Emirates: SEA - DXB, DXB - CPT
  </auro-flight>
</div>

<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

  ```html
    <auro-flight 
      flights='["AS 2087", "EK 230", "EK 772"]' 
      duration="42h 35m" 
      daysChanged="2"
      departureTime="6:00 am"
      departureStation="ALW"
      arrivalTime="10:35 am"
      arrivalStation="CPT"
      >
        AS 2087 is operated by Horizon Air as AlaskaHorizon: ALW - SEA
        EK 230, 772 are operated by Emirates: SEA - DXB, DXB - CPT
    </auro-flight>
  ```

</auro-accordion>