import styles from '../styles/Sheet.module.css';
import {
  Abilities,
  AbilityScore,
  Appearance,
  Attacks,
  Backstory,
  Combat,
  Feature,
  Features,
  Field,
  Personality,
  Proficiencies,
  Slot,
  SmallFeature,
  VertPage,
}
from '../components/sheet';

export default function Sheet(props) {
  return (
    <>
    <VertPage>
      <div className={styles.layoutpg1}>
        <div className={styles.header}>
          <span className={styles.header_name}>Nim Nightbreeze</span>
          <span className={styles.header_class}>Arcane Archer</span>
          <span className={styles.header_background}>Urban Bountyhunter</span>
          <span className={styles.header_player}>Magne</span>
          <span className={styles.header_race}>High Elf</span>
          <span className={styles.header_alignment}>Chaotic Neutral</span>
        </div>
        <Abilities />
        <Combat />
        <Proficiencies />
      </div>
    </VertPage>
    <VertPage>
      <div className={styles.layoutpg2}>
        <div className={styles.header_alt}>
          <span className={styles.header_alt_name}>Nim Nightbreeze</span>
          <span className={styles.header_alt_age}>72</span>
          <span className={styles.header_alt_height}>1.55 m</span>
          <span className={styles.header_alt_weight}>119 lb.</span>
          <span className={styles.header_alt_eyes}>Green</span>
          <span className={styles.header_alt_skin}>White</span>
          <span className={styles.header_alt_hair}>Black</span>
        </div>
        <Appearance />
        <Personality />
        <Backstory />
        <Features />
      </div>
    </VertPage>
    <VertPage>
      <div className={styles.layoutpg3}>
      </div>
    </VertPage>
    <VertPage>
      <div className={styles.layoutpg4}>
        <SmallFeature style={{ gridColumn: '1 / span 1'}}>
          <p><strong>Second Wind. </strong><br/>
            You can use a bonus action to regain (1d10 + fighter level) HP.<br/>
            <Slot /><br/>
            Regain on Short or Long Rest.
          </p>
        </SmallFeature>
        <SmallFeature style={{ gridColumn: '1 / span 1'}}>
          <p><strong>Action Surge. </strong>(Level 2)<br/>
            You can take one additional action,
            but only once on the same turn.<br/>
            <Slot tag="Lvl 2"/>
            <Slot tag="Lvl 17"/><br/>
            Regain on Short or Long Rest.
          </p>
        </SmallFeature>
        <SmallFeature style={{ gridColumn: '1 / span 1'}}>
          <p><strong>Extra Attack. </strong>(Level 5)<br/>
            Whenever you take the Attack action on your turn.
            <table className={styles.table}>
              <tr><th>Level</th><td>5</td><td>11</td><td>20</td></tr>
              <tr><th>Attacks</th><td>2</td><td>3</td><td>4</td></tr>
            </table>
          </p>
        </SmallFeature>
        <SmallFeature style={{ gridColumn: '1 / span 1'}}>
          <p><strong>Magic Arrow. </strong>(Level 7)<br/>
            Whenever you fire a nonmagical arrow from a shortbow or longbow,
            you can make it magical for the purpose of overcoming resistance and immunity
            to nonmagical attacks and damage.
          </p>
        </SmallFeature>
        <SmallFeature style={{ gridColumn: '1 / span 1'}}>
          <p><strong>Curving Shot. </strong>(Level 7)<br/>
            When you make an attack roll with a magic arrow and miss,
            you can use a bonus action to reroll the attack roll
            against a different target within 60 feet of the original target.
          </p>
        </SmallFeature>
        <SmallFeature style={{ gridColumn: '1 / span 1'}}>
          <p><strong>Indomitable. </strong>(Level 9)<br/>
            You can reroll a saving throw that you fail.
            If you do so, you must use the new roll.<br/>
            <Slot tag='Lvl 9'/>
            <Slot tag='Lvl 13'/>
            <Slot tag='Lvl 17'/><br/>
            Regain on Long Rest.
          </p>
        </SmallFeature>
        <SmallFeature style={{ gridColumn: '1 / span 1'}}>
          <p><strong>Ever-Ready Shot. </strong>(Level 15)<br/>
            Your magical archery is available whenever battle starts.
            If you roll initiative and have no uses of Arcane Shot remaining,
            you regain one use of it.
          </p>
        </SmallFeature>
        <Feature style={{ gridColumn: '2 / span 1', gridRow: '1 / span 8'}}>
          <p><strong>Arcane Shot. </strong>(Level 3)<br/>
            Once per turn shorbow/longbow Attack action,
            apply one of your Arcane Shot option.
            When the arrow hits a creature, unless no attack roll.<br/>
            <Slot />
            <Slot tag="Lvl 3"/>
            <Slot tag="Lvl 5"/>
            <Slot tag="Lvl 9"/>
            <Slot tag="Lvl 13"/>
            <Slot tag="Lvl 17"/><br/>
            Regain Short or Long rest.<br/>
            <table className={styles.table}>
              <tr><th>Level</th>
                <td>3</td><td>7</td><td>10</td><td>15</td><td>18</td>
              </tr>
              <tr><th>Options</th>
                <td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>
              </tr>
            </table>
            <hr/>
            <Slot tag="Banishing Arrow" /><br/>
            On hit: CHA saving throw, (2d6 force damage).<br/>
            Failed save: the target&apos;s speed is 0, and it is incapacitated.<br/>
            At the end of its next turn, the target reappears.
            <hr/>
            <Slot tag="Beguiling Arrow" /><br/>
            On hit: extra 2d6 (4d6) psychic damage, WIS saving throw.<br/>
            Failed save: Choose one of your allies within 30 feet of the target.
            It is charmed by the chosen ally until the start of your next turn.
            Ends early if the chosen ally attacks the target.
            <hr/>
            <Slot tag="Bursting Arrow" /><br/>
            On hit: the target and all other creatures within 10 feet of it
            take 2d6 (4d6) force damage each.<br/>
            <hr/>
            <Slot tag="Enfeebling Arrow" /><br/>
            On hit: extra 2d6 (4d6) necrotic damage, CON saving throw.<br/>
            Failed save: the damage dealt by its weapon attacks is halved
            until the start of your next turn.
            <hr/>
            <Slot tag="Grasping Arrow" /><br/>
            On hit: extra 2d6 (4d6) poison damage, speed is reduced by 10 feet,
            and it takes 2d6 (4d6) slashing damage
            the first time on each turn it moves without teleporting.
            Any creature can use an action to remove the brambles: STR (Athletics) check.
            Otherwise, lasts for 1 minute or until you use this again.
            <hr/>
            <Slot tag="Piercing Arrow" /><br/>
            No attack roll. DEX saving throw.<br/>
            Line: 1 ft. wide and 30 ft. long.
            The arrow passes harmlessly through objects, ignoring cover.<br/>
            Failed save: Creature takes damage as if it were hit by the arrow,
            plus 1d6 (2d6) piercing damage. Successful save: half damage.
            <hr/>
            <Slot tag="Seeking Arrow" /><br/>
            No attack roll. DEX saving throw.
            One creature you have seen in the past minute.
            The arrow flies toward that creature, moving around corners if necessary
            and ignoring three-quarters cover and half cover.
            If the target is within the weapon’s range
            and there is a path large enough for the arrow to travel to the target.
            Otherwise, the arrow disappears after traveling as far as it can.
            Failed save: damage as if it were hit by the arrow, extra 1d6 (2d6) force damage,
            and you learn the target’s current location.<br/>
            Successful save: half damage.
            <hr/>
            <Slot tag="Shadow Arrow" /><br/>
            On hit: extra 2d6 (4d6) psychic damage, WIS saving throw.<br/>
            Failed save: unable to see anything farther than 5 feet away
            until the start of your next turn.
          </p>
        </Feature>
      </div>
    </VertPage>
    </>
  );
};
