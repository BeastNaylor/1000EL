import { ReactComponent as Flooding } from "../images/1 flooding.svg";
import { ReactComponent as Magnet } from "../images/2 magnet.svg";
import { ReactComponent as Intercom } from "../images/3 intercom.svg";
import { ReactComponent as Airlock } from "../images/4 airlock.svg";
import { ReactComponent as TightGap } from "../images/5 tight gap.svg";
import { ReactComponent as SlipHazard } from "../images/6 slip hazard.svg";
import { ReactComponent as ExplosionRisk } from "../images/7 explosion risk.svg";
import { ReactComponent as Laser } from "../images/8 laser.svg";
import { ReactComponent as Interference } from "../images/9 interference.svg";
import { ReactComponent as Compression } from "../images/10 compression.svg";
import { ReactComponent as Radiation } from "../images/11 radiation.svg";
import { ReactComponent as LowGravity } from "../images/12 low gravity.svg";
import { ReactComponent as LivingQuarters } from "../images/13 living quarters.svg";
import { ReactComponent as Firearms } from "../images/14 firearms.svg";
import { ReactComponent as Foodstuff } from "../images/15 foodstuff.svg";
import { ReactComponent as Wildlife } from "../images/16 wildlife.svg";
import { ReactComponent as LowTemp } from "../images/17 low temperature.svg";
import { ReactComponent as HighVoltage } from "../images/18 high voltage.svg";
import { ReactComponent as Steep } from "../images/19 steep.svg";
import { ReactComponent as AlienForms } from "../images/20 alien forms.svg";
import { ReactComponent as Breach } from "../images/21 breach.svg";
import { ReactComponent as MovingMachinery } from "../images/22 moving machinery.svg";
import { ReactComponent as UnevenSurface } from "../images/23 uneven surface.svg";
import { ReactComponent as HighActivity } from "../images/24 high activity.svg";
import { ReactComponent as ClassifiedMaterial } from "../images/25 classified material.svg";
import { ReactComponent as Corrosive } from "../images/26 corrosive.svg";
import { ReactComponent as HazardousMaterial } from "../images/27 hazardous material.svg";
import { ReactComponent as RestrictedArea } from "../images/28 restricted area.svg";
import { ReactComponent as Noise } from "../images/29 noise.svg";
import { ReactComponent as Debris } from "../images/30 debris.svg";
import { ReactComponent as BioHazard } from "../images/31 biological hazard.svg";
import { ReactComponent as GasStorage } from "../images/32 gas storage.svg";
import { ReactComponent as OrganicMatter } from "../images/33 organic matter.svg";
import { ReactComponent as Refrigeration } from "../images/34 refrigeration.svg";
import { ReactComponent as SimulatedReality } from "../images/35 simulated reality.svg";
import { ReactComponent as CryoChamber } from "../images/36 cryogenic chamber.svg";
import { ReactComponent as Storage } from "../images/37 storage.svg";
import { ReactComponent as MedSupport } from "../images/38 medical support.svg";
import { ReactComponent as NavSystem } from "../images/39 navigation system.svg";
import { ReactComponent as AI } from "../images/40 artifical intelligence.svg";
import { ReactComponent as BroadcastSystem } from "../images/41 broadcast system.svg";
import { ReactComponent as Spillage } from "../images/42 spillage.svg";
import { ReactComponent as CompTerminal } from "../images/43 computer terminal.svg";
import { ReactComponent as Containment } from "../images/44 containment.svg";
import { ReactComponent as HazmatSuit } from "../images/45 hazmat suit.svg";
import { ReactComponent as VidSurveillance } from "../images/46 video surveillance.svg";
import { ReactComponent as HighGravity } from "../images/47 high gravity.svg";
import { ReactComponent as AdverseWeather } from "../images/48 adverse weather.svg";
import { ReactComponent as UV } from "../images/49 ultraviolet.svg";
import { ReactComponent as Infrared } from "../images/50 infrared.svg";

const potentialComponents = [
  <Flooding />,
  <Magnet />,
  <Intercom />,
  <Airlock />,
  <TightGap />,
  <SlipHazard />,
  <ExplosionRisk />,
  <Laser />,
  <Interference />,
  <Compression />,
  <Radiation />,
  <LowGravity />,
  <LivingQuarters />,
  <Firearms />,
  <Foodstuff />,
  <Wildlife />,
  <LowTemp />,
  <HighVoltage />,
  <Steep />,
  <AlienForms />,
  <Breach />,
  <MovingMachinery />,
  <UnevenSurface />,
  <HighActivity />,
  <ClassifiedMaterial />,
  <Corrosive />,
  <HazardousMaterial />,
  <RestrictedArea />,
  <Noise />,
  <Debris />,
  <BioHazard />,
  <GasStorage />,
  <OrganicMatter />,
  <Refrigeration />,
  <SimulatedReality />,
  <CryoChamber />,
  <Storage />,
  <MedSupport />,
  <NavSystem />,
  <AI />,
  <BroadcastSystem />,
  <Spillage />,
  <CompTerminal />,
  <Containment />,
  <HazmatSuit />,
  <VidSurveillance />,
  <HighGravity />,
  <AdverseWeather />,
  <UV />,
  <Infrared />,
];

const selectSemioticImage = (index) => {
  return potentialComponents[index];
};

export default selectSemioticImage;
