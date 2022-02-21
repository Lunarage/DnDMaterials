import styles from '../styles/Sheet.module.css';
import { VariFrame } from './boxes';

export const VertPage = (props) => {
  return <div className={styles.page}>{props.children}</div>;
};

export const ArmorClass = (props) => {
  return (
    <div className={styles.ac_wrapper}>
      <div className={styles.ac_background}>
        <ACBG />
      </div>
      <span>Armor<br/>Class</span>
    </div>
  );
};

export const Box = ({ content }) => {
  return (
    <div className={styles.box_wrapper}>
      <div className={styles.box_background}>
        <BoxBG />
      </div>
      <span>{ content }</span>
    </div>
  );
}

export const AltBox = ({ content }) => {
  return (
    <div className={styles.altbox_wrapper}>
      <div className={styles.altbox_background}>
        <AltBoxBG />
      </div>
      <span>{ content }</span>
    </div>
  );
}

export const Hitpoints = () => {
  return (
    <div className={styles.hitpoints_wrapper}>
      <div className={styles.hitpoints_background}>
        <AltSmallFrameBG />
      </div>
      <span>Current Hit Points</span>
    </div>
  );
}

export const Saves = () => {
  return (
    <div className={styles.hitpoints_wrapper}>
      <div className={styles.hitpoints_background}>
        <AltSmallFrameBG />
      </div>
      <span className={styles.death_save_success}>
        Successes
      </span>
      <div className={styles.death_save_success}>
        <span />
        <span />
        <span />
      </div>
      <span className={styles.death_save_failure}>
        Failures
      </span>
      <div className={styles.death_save_failure}>
        <span />
        <span />
        <span />
      </div>
      <span>Death Saves</span>
    </div>
  );
}

export const Attacks = (props) => {
  return (
    <div className={styles.attacks}>
      <div className={styles.background}>
      </div>
      <span className={styles.attack_header}>Name</span>
      <span className={styles.attack_header}>Atk Bonus</span>
      <span className={styles.attack_header}>Damage</span>
      <span className={styles.attack_field} />
      <span className={styles.attack_field} />
      <span className={styles.attack_field} />
      <span className={styles.attack_field} />
      <span className={styles.attack_field} />
      <span className={styles.attack_field} />
      <span className={styles.attack_field} />
      <span className={styles.attack_field} />
      <span className={styles.attack_field} />
    </div>
  );
}

export const Proficiency = (props) => {
  return (
    <div style={{gridColumn: '1 / span 2'}} className={styles.field_wrapper}>
      <div className={styles.field_background}>
        <FieldBG />
      </div>
      <span>Proficiency Bonus</span>
    </div>
  );
};

export const Combat = (props) => {
  return (
    <div className={styles.combat_wrapper}>
      <div className={styles.combat_background}>
        <FrameBG />
      </div>
      <div className={styles.combat}>
        <ArmorClass />
        <Box content='Initiative' />
        <Box content='Speed' />
        <Box content='Maximum Hit Points' />
        <Box content='Hit Dice' />
        <Box content='Total Hit Dice' />
        <Box content='Temp Hit Points' />
        <Hitpoints />
        <AltBox content='Inspiration' />
        <Saves />
        <Attacks />
      </div>
    </div>
  );
}

export const Proficiencies = (props) => {
  return (
    <div className={styles.proficiencies_wrapper}>
      <div className={styles.proficiencies_background}>
        <AltFrameBG />
      </div>
      <div className={styles.proficiencies}>
        <div>
          <span>Other Proficiencies</span>
          <hr/>
          <p><strong>Weapons &amp; Armor: </strong>All Armor, Shields, Simple Weapons, Martial Weapons</p>
          <p><strong>Tools: </strong>Dice set, Theives&apos; Tools</p>
          <p><strong>Languages: </strong>Common, Elvish, Dwarvish</p>
        </div>
        <div>
          <span>Other Traits &amp; Features</span>
          <hr/>
          <p>Darkvision 60 ft.</p>
          <p>
            <strong>Fighting Style: Archery. </strong>
            You gain a +2 bonus to attack rolls you make with ranged weapons.
          </p>
          <p><strong>Fey Ancestry. </strong>
            You have advantage on saves against being charmed, and magic can’t put you to sleep.
          </p>
        </div>
      </div>
    </div>
  )
}

export const Abilities = () => {

  return (
    <div className={styles.abilities_wrapper}>
      <div className={styles.abilities_background}>
        <LongFrameBG />
      </div>
      <div className={styles.abilities}>
        <Proficiency />
        <AbilityScore ability={ "Strength" } />
        <AbilityScore ability={ "Dexterity" } />
        <AbilityScore ability={ "Constitution" } />
        <AbilityScore ability={ "Intelligence" } />
        <AbilityScore ability={ "Wisdom" } />
        <AbilityScore ability={ "Charisma" } />
      </div>
    </div>
  );
}

export const AbilityScore = ({ ability }) => {
  const skills = {
    strength: [
      "Saving Throws",
      "Athletics",
    ],
    dexterity: [
      "Saving Throws",
      "Acrobatics",
      "Sleight of Hand",
      "Stealth",
    ],
    constitution: [
      "Saving Throws",
    ],
    intelligence: [
      "Saving Throws",
      "Arcana",
      "History",
      "Investigation",
      "Nature",
      "Religion",
    ],
    wisdom: [
      "Saving Throws",
      "Animal Handling",
      "Insight",
      "Medicine",
      "Perception",
      "Survival",
    ],
    charisma: [
      "Saving Throws",
      "Deception",
      "Intimidation",
      "Performance",
      "Persuation",
    ],
  };

  return (
    <>
      <div className={styles.ability_wrapper}>
        <div className={styles.background}>
          <AbilityBG />
        </div>
        <span>{ ability }</span>
      </div>
      <div className={styles.skill_list}>
        { ability === 'Strength' && (
          skills.strength.map((element, i) => { return (<Skill name={element} key={i}/>) })
        )}
        { ability === 'Dexterity' && (
          skills.dexterity.map((element, i) => { return (<Skill name={element} key={i}/>) })
        )}
        { ability === 'Constitution' && (
          skills.constitution.map((element, i) => { return (<Skill name={element} key={i}/>) })
        )}
        { ability === 'Intelligence' && (
          skills.intelligence.map((element, i) => { return (<Skill name={element} key={i}/>) })
        )}
        { ability === 'Wisdom' && (
          skills.wisdom.map((element, i) => { return (<Skill name={element} key={i}/>) })
        )}
        { ability === 'Charisma' && (
          skills.charisma.map((element, i) => { return (<Skill name={element} key={i}/>) })
        )}
      </div>
    </>
  );
};

export const Skill = ({ name }) => {
  return (
    <div className={styles.ability_skill}>
      <div className={styles.ability_prof} />
      <span style={{
        width: '6mm',
        height: '6mm',
        display: 'inline-block',
        borderRadius: "5px",
        backgroundColor: "#FEFEFE"
      }}>
      </span>
      <span>{ name }</span>
    </div>
  );
}

export const Field = ({ name }) => {
  return (
    <div className={styles.field_wrapper}>
      <div className={styles.field_background}>
        <FieldBG />
      </div>
      <span>{ name }</span>
    </div>
  );
}

export const Appearance = (props) => {
  return (
    <div className={styles.appearance_wrapper}>
      <div className={styles.appearance_background}>
        <FrameBGWhite />
      </div>
      <p>Her black hair is braided.</p>
      <p>Her eyebrows are long.</p>
      <p>Her hooded cloak is long and dark green.</p>
      <p>She wears a quiver, a Longbow and a Rapier at her hip.</p>
      <p>Several pouches hangs from her belt.</p>
      <span>Character Appearance</span>
    </div>
  );
}

export const Personality = (props) => {
  return (
    <div className={styles.personality_wrapper}>
      <div className={styles.personality_background}>
        <FrameBG />
      </div>
      <div className={styles.personality}>
        <PersonalityBox name="Personality Traits">
          <p className={styles.personality_trait}>
            I prefer to show rather than tell trough magic.
          </p>
          <p className={styles.personality_trait}>
            Catchphrase.
          </p>
        </PersonalityBox>
        <PersonalityBox name="Ideals">
          <p className={styles.personality_trait}>
            <strong>Freedom: </strong> Chains are meant to be broken.
          </p>
        </PersonalityBox>
        <PersonalityBox name="Bonds">
          <p className={styles.personality_trait}>
            My mentor is lost in some dimension, I blame myself, and I need to find him.
          </p>
        </PersonalityBox>
        <PersonalityBox name="Flaws">
          <p className={styles.personality_trait}>
            I (believe I) am the smartest person alive!
          </p>
          <p className={styles.personality_trait}>
            I am annoyingly sarcastic.
          </p>
        </PersonalityBox>
      </div>
      <span>Personality</span>
    </div>
  );
}

export const PersonalityBox = ({ name, children }) => {
  return (
    <div className={styles.personality_box_wrapper}>
      <div className={styles.personality_box_background}>
        <PersonalityBoxBG />
      </div>
      { children }
      <span>{ name }</span>
    </div>
  );
}

export const Backstory = (props) => {
  return (
    <div className={styles.backstory_wrapper}>
      <div className={styles.backstory_background}>
        <FrameBGWhite />
      </div>
      <p>
        Nim is from a traditional elvish family.
        Her parents wanted her to be trained as a wizard, as is customary.
        She does not really want to be a wizard,
        and after years of training as a wizard,
        she meets her mentor who trains her in the ways of the fighter.
      </p>
      <p>
        A freak magic accident sends Nim and her mentor to different dimensions,
        and she ends up in Sigil. She hopes to one day find her mentor again.
      </p>
      <p>
        Recently she has been taking what ever jobs that come her way,
        usually shady dealings.
      </p>
      <span>Character Backstory</span>
    </div>
  );
}

export const Features = (props) => {
  return (
    <div className={styles.features_wrapper}>
      <div className={styles.features_background}>
        <FrameBGWhite />
      </div>
      <p><strong>Trance. </strong>
        You don&apos;t need to sleep, but meditate semiconsciously for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.
      </p>
      <p><strong>Magic Initiate (Wizard)</strong><br/>
        <Slot tag="1st Level Spell Slot"/><br/>
        Regain on Long Rest.
      </p>
      <span>Additional Features, Traits &amp; Feats</span>
    </div>
  );
}

export const Feature = ({ children, style }) => {
  return (
    <div className={styles.feature_wrapper} style={style}>
      <div className={styles.background_wrapper}>
        <LargeFrameBG />
      </div>
      { children }
    </div>
  );
}

export const SmallFeature = ({ children, style }) => {
  return (
    <div className={styles.small_feature_wrapper} style={style}>
      <div className={styles.background_wrapper}>
        <SmallFeatureBG />
      </div>
      { children }
    </div>
  );
}

export const Slot = ({ tag }) => {
  return(
    <div className={styles.slot_wrapper}>
      <div className={styles.slot} /><span><strong>{ tag }</strong></span>
    </div>
  );
}

export const ACBG = (props) => {
  return (
    <svg viewBox="0 0 79 100">
    <path fill="#FEFEFE" d="M72.8,30.7v13.7c-1,3.6-9.7,30.9-31.9,38.6c-0.3-0.4-0.8-0.7-1.4-0.7c-0.6,0-1,0.3-1.4,0.7 C26,78.7,17.9,68.6,12.9,59.8c0,0,0,0,0,0c-0.3-0.5-0.6-1-0.8-1.5c-3.6-6.7-5.4-12.4-5.9-14V30.7c0.7-0.3,1.2-0.9,1.2-1.7 c0-0.1,0-0.2-0.1-0.3c6.2-4,8.5-11.5,9.2-15.2L38.1,7c0.3,0.4,0.8,0.7,1.4,0.7c0.6,0,1.1-0.3,1.4-0.7l21.4,6.6 c0.8,3.6,3,11.1,9.2,15.2V29c0,0.2,0,0.4,0.1,0.6C71.8,30.1,72.3,30.5,72.8,30.7z"></path>
    <path fill="#000000" d="M73.2,27.3c-0.4,0-0.8,0.2-1.1,0.4c-5.8-3.9-7.9-11.3-8.6-14.5l-0.1-0.4l-22-6.7c-0.1-0.9-0.8-1.7-1.8-1.7 s-1.7,0.8-1.8,1.7l-22,6.7l-0.1,0.4c-0.6,3.2-2.7,10.6-8.6,14.5c-0.3-0.3-0.7-0.4-1.1-0.4c-1,0-1.8,0.8-1.8,1.9 c0,0.8,0.5,1.5,1.2,1.7v13.5v0.2c0.9,3.2,9.7,31.2,32.4,39.2c0.1,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8c9.3-3.3,17.3-10.1,23.8-20.4 c5.3-8.4,7.9-16.5,8.6-18.8V30.9c0.7-0.3,1.2-0.9,1.2-1.7C75,28.1,74.2,27.3,73.2,27.3z M72.5,44.3c-1,3.6-9.6,30.5-31.5,38.2 c-0.3-0.4-0.8-0.7-1.4-0.7c-0.6,0-1,0.3-1.4,0.7C16.3,74.8,7.8,47.9,6.7,44.3V30.9c0.7-0.3,1.2-0.9,1.2-1.7c0-0.1,0-0.2-0.1-0.3 c6.1-4,8.4-11.4,9.1-15l21.3-6.5c0.3,0.4,0.8,0.7,1.4,0.7c0.6,0,1.1-0.3,1.4-0.7l21.2,6.5c0.8,3.6,3,11,9.1,15c0,0.1,0,0.2,0,0.3 c0,0.8,0.5,1.5,1.2,1.7V44.3z M73.2,27.3c-0.4,0-0.8,0.2-1.1,0.4c-5.8-3.9-7.9-11.3-8.6-14.5l-0.1-0.4l-22-6.7 c-0.1-0.9-0.8-1.7-1.8-1.7s-1.7,0.8-1.8,1.7l-22,6.7l-0.1,0.4c-0.6,3.2-2.7,10.6-8.6,14.5c-0.3-0.3-0.7-0.4-1.1-0.4 c-1,0-1.8,0.8-1.8,1.9c0,0.8,0.5,1.5,1.2,1.7v13.5v0.2c0.9,3.2,9.7,31.2,32.4,39.2c0.1,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8 c9.3-3.3,17.3-10.1,23.8-20.4c5.3-8.4,7.9-16.5,8.6-18.8V30.9c0.7-0.3,1.2-0.9,1.2-1.7C75,28.1,74.2,27.3,73.2,27.3z M72.5,44.3 c-1,3.6-9.6,30.5-31.5,38.2c-0.3-0.4-0.8-0.7-1.4-0.7c-0.6,0-1,0.3-1.4,0.7C16.3,74.8,7.8,47.9,6.7,44.3V30.9 c0.7-0.3,1.2-0.9,1.2-1.7c0-0.1,0-0.2-0.1-0.3c6.1-4,8.4-11.4,9.1-15l21.3-6.5c0.3,0.4,0.8,0.7,1.4,0.7c0.6,0,1.1-0.3,1.4-0.7 l21.2,6.5c0.8,3.6,3,11,9.1,15c0,0.1,0,0.2,0,0.3c0,0.8,0.5,1.5,1.2,1.7V44.3z M78.1,24.5c-8.7-1.8-9.9-14.9-9.9-15l-0.1-0.8L39.5,0 L10.9,8.7l-0.1,0.8c0,0.1-1.2,13.3-9.9,15l-1,0.2v20.4v0.3C0,45.8,9.6,82.1,39.1,89.9l0.3,0.1l0.3-0.1C69.5,82.1,79,45.8,79.1,45.4 V24.7L78.1,24.5z M76.7,45C76,47.5,66.6,80.1,39.5,87.5C12.6,80.1,3.2,47.4,2.5,45V26.7c8.3-2.4,10.3-13,10.7-16.1l26.4-8l26.4,8 c0.4,3.1,2.4,13.7,10.7,16.1V45z M63.5,13.2l-0.1-0.4l-22-6.7c-0.1-0.9-0.8-1.7-1.8-1.7s-1.7,0.8-1.8,1.7l-22,6.7l-0.1,0.4 c-0.6,3.2-2.7,10.6-8.6,14.5c-0.3-0.3-0.7-0.4-1.1-0.4c-1,0-1.8,0.8-1.8,1.9c0,0.8,0.5,1.5,1.2,1.7v13.5v0.2 c0.9,3.2,9.7,31.2,32.4,39.2c0.1,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8c9.3-3.3,17.3-10.1,23.8-20.4c5.3-8.4,7.9-16.5,8.6-18.8V30.9 c0.7-0.3,1.2-0.9,1.2-1.7c0-1-0.8-1.9-1.8-1.9c-0.4,0-0.8,0.2-1.1,0.4C66.2,23.9,64.1,16.4,63.5,13.2z M72.5,30.9v13.5 c-1,3.6-9.6,30.5-31.5,38.2c-0.3-0.4-0.8-0.7-1.4-0.7c-0.6,0-1,0.3-1.4,0.7C16.3,74.8,7.8,47.9,6.7,44.3V30.9 c0.7-0.3,1.2-0.9,1.2-1.7c0-0.1,0-0.2-0.1-0.3c6.1-4,8.4-11.4,9.1-15l21.3-6.5c0.3,0.4,0.8,0.7,1.4,0.7c0.6,0,1.1-0.3,1.4-0.7 l21.2,6.5c0.8,3.6,3,11,9.1,15c0,0.1,0,0.2,0,0.3C71.3,30,71.8,30.6,72.5,30.9z"></path>
  </svg>
  );
};

export const AbilityBG = (props) => {
  return (
    <svg viewBox="0 0 81 100">
      <path fill="#FEFEFE" d="M 18.023007,83.829231 A 24.699351,15.45495 0 1 1 18.27,84.138334" />
      <path fill="#FEFEFE" d="M77.56,53.81a4.55,4.55,0,0,1-1.64-3.69c0-6.29-1.3-14.52,1.37-20.68A5,5,0,0,1,76,26.51a5.3,5.3,0,0,1-.72-6c1.28-2.68,1.17-6.68.88-9.54a4.15,4.15,0,0,1,1.22-3.27c.12-.62.23-1.24.35-1.86C73.47,7.49,70.86,2,70.86,2H10.14S8,6.44,4.48,6.16A5.61,5.61,0,0,1,4.63,7.5c0,1.54-.17,3.1-.21,4.66.09,1.24.23,2.47.44,3.68a33,33,0,0,1,1.58,7.78,4.58,4.58,0,0,1-1.05,3.21,4.79,4.79,0,0,1-1.47,2.34,5.17,5.17,0,0,1,.5,2.12c.18,6.94.78,13.53.25,20.5a5,5,0,0,1-1.2,3c.06,2,0,4,0,6.07a4.61,4.61,0,0,1,.44,3.71C1.64,73,6.36,78,12.35,82.16a5.16,5.16,0,0,1,.49.21c.91.5,1.81,1,2.73,1.55a1,1,0,0,0,.17.1c.54.3,1.09.59,1.66.85a2.39,2.39,0,0,1,.21.13h1.85a4.21,4.21,0,0,1-1.19-1.92,9.45,9.45,0,0,1-.9-6.13,3.71,3.71,0,0,1,.18-1.22c.16-.41.32-.79.49-1.15A10.44,10.44,0,0,1,21,70.26c.11-.12.21-.25.32-.36a14.53,14.53,0,0,1,1.91-1.84,18.26,18.26,0,0,1,6-3.17,21.13,21.13,0,0,1,4.9-1.39c6.15-1.45,14.34-.72,19.85,2.51.67.3,1.33.62,1.94,1a6.52,6.52,0,0,1,.67.45l.07,0a14.44,14.44,0,0,1,4,3.33,4.51,4.51,0,0,1,.77,1,22.47,22.47,0,0,1,1.29,1.89,4.61,4.61,0,0,1,.57,3.41,5.42,5.42,0,0,1,.27,1.78,5.73,5.73,0,0,1-.27,2.33,5.11,5.11,0,0,1-1.29,3.1,3.79,3.79,0,0,1-.66.72h2.68a4.41,4.41,0,0,1,2.21-1.49c1.34-.86,2.74-1.65,4.06-2.61,1.7-1.26,5.14-3.55,5.9-5.61A5.51,5.51,0,0,1,76.8,74a7.8,7.8,0,0,0,.37-1.71,5.4,5.4,0,0,1,.34-1.56c-.09-1.51-.18-3-.41-4.53a6.21,6.21,0,0,1,.5-3.74C77.46,59.57,77.46,56.64,77.56,53.81Z" />
      <path fill="#000000" d="M4.52,13.62A34.66,34.66,0,0,1,3.08,6.26l0-.42.63-.2C5.22,5.18,9.41,3.35,9.41,1V0H71.59V1c0,2.37,4.19,4.2,5.66,4.66l.63.2,0,.42a35.34,35.34,0,0,1-1.44,7.36L76,7.3C74.42,6.71,70.47,5,69.74,2H11.26C10.52,5,6.58,6.71,5,7.3ZM2.32,79.46H2.6c.08-1.12.16-2.38.24-3.76A13,13,0,0,1,.63,69.83,9.4,9.4,0,0,1,3.21,62.6V61.43S1.83,35.67.56,31.56L.4,31l.47-.29a12.31,12.31,0,0,0,2.2-1.87,6.23,6.23,0,0,0,1.55-2.24A5.08,5.08,0,0,0,5,23.27c0-.11-.58-1.35-1.12-3l-.26,2.85c.27.79.5,1.63.71,2.49a5.17,5.17,0,0,1-1.56,2A33.13,33.13,0,0,0,1.74,23.6l-.07-.2L2.91,9.63c0,2,1.38,6.53,1.38,6.53a36.23,36.23,0,0,0,2.1,6.67A7.13,7.13,0,0,1,5,28.71C6.68,38,5.08,71,4.87,74.89A15.6,15.6,0,0,1,3,71.41c.08-2,.13-4.16.16-6.41a7.57,7.57,0,0,0-1.15,4.71,12,12,0,0,0,2.1,5.41l.15.22.45.64.06.07h0a29.64,29.64,0,0,0,5.74,5.66A39.48,39.48,0,0,1,14,83.83h0l.26.18c.79.54,1.55,1.09,2.29,1.65l.18.13h0c1.42,1.09,2.71,2.17,3.78,3.11,1.39,0,2.75.11,4,.22a16.4,16.4,0,0,1-3.19-3.33H17.91l-2.49-2h2.32a16.19,16.19,0,0,1-.88-4.16,4.31,4.31,0,0,1-5.21,1.79c.59.18,3,.53,5.24-4.08v0a8.24,8.24,0,0,1,2.52-5.32,13.54,13.54,0,0,0-1,10.29A1.76,1.76,0,0,0,19.8,83,11.36,11.36,0,0,1,19,78.77c0-8.55,9.66-15.51,21.54-15.51S62,70.22,62,78.77A11.36,11.36,0,0,1,61.2,83a1.76,1.76,0,0,0,1.34-.64,13.54,13.54,0,0,0-1-10.29A8.24,8.24,0,0,1,64.1,77.4v0c2.2,4.61,4.64,4.26,5.24,4.08a4.31,4.31,0,0,1-5.21-1.79,16.19,16.19,0,0,1-.88,4.16h2.32l-2.49,2H59.68a16.4,16.4,0,0,1-3.19,3.33c1.2-.11,2.57-.21,4-.22,1.07-.94,2.36-2,3.78-3.11h0l.18-.13c.74-.56,1.5-1.11,2.29-1.65l.26-.18h0a39.48,39.48,0,0,1,3.49-2.11,29.64,29.64,0,0,0,5.74-5.66h0l.06-.07.45-.64.15-.22A12,12,0,0,0,79,69.71,7.64,7.64,0,0,0,77.8,65c0,2.25.08,4.41.16,6.41a15.6,15.6,0,0,1-1.83,3.48C75.92,71,74.32,38,76,28.71a7.1,7.1,0,0,1-1.34-5.88,38.28,38.28,0,0,0,2.09-6.67s1.4-4.48,1.38-6.53L79.33,23.4l-.07.2a33.13,33.13,0,0,0-1.07,4.08,5.39,5.39,0,0,1-1.57-2c.22-.86.45-1.7.71-2.49l-.25-2.85c-.54,1.61-1.07,2.85-1.12,3a5.08,5.08,0,0,0,.42,3.36,6.23,6.23,0,0,0,1.55,2.24,12.31,12.31,0,0,0,2.2,1.87l.48.29-.17.53c-1.26,4.11-2.64,29.87-2.64,29.87,0,.39,0,.79,0,1.17a9.4,9.4,0,0,1,2.58,7.23,13.37,13.37,0,0,1-2.2,5.89c.07,1.38.15,2.64.23,3.76h.28c1.49-.12,2.79.71,2.16,1.75a2.46,2.46,0,0,1-1.72,1.15,2.58,2.58,0,0,0,.75-.85c.17-.3,0-.44-.14-.51l-.38,0h0a7.86,7.86,0,0,0-.84,0c.18,2.31.32,3.71.33,3.79L79,85.79H66.64c-1.46,1-2.84,2.15-4,3.15a11.85,11.85,0,0,1,7,2.12l-2.75,1.09h0a30,30,0,0,1-5.35,1.74h0l-.33,0L61,94c-9.66,1.67-10.67.75-10.67.75A10.09,10.09,0,0,0,57.11,92l.23-.24c.1-.1.62-.62,1.46-1.4-.62,0-1.22.07-1.81.12h0l-.44,0a8.82,8.82,0,0,0-1.18.23,7.12,7.12,0,0,0-.87.27l-.14,0a6.24,6.24,0,0,0-1,.44l-.11.07a5.63,5.63,0,0,0-.77.54l-.22.19a4.82,4.82,0,0,0-.75.86l-7.89.9.06,0a26.18,26.18,0,0,1-6.46,0l.06,0-7.89-.9a4.5,4.5,0,0,0-.76-.86l-.22-.2a7,7,0,0,0-.79-.55l-.09-.06a8.88,8.88,0,0,0-.95-.44L26.45,91c-.3-.11-.59-.2-.86-.27-.46-.11-.86-.17-1.14-.21l-.44,0h0c-.59,0-1.19-.09-1.81-.12.84.78,1.36,1.3,1.45,1.4l.24.24a10.09,10.09,0,0,0,6.78,2.71s-1,.92-10.67-.75l-.24,0-.33,0h0a29.76,29.76,0,0,1-5.35-1.74h0l-2.75-1.09a11.85,11.85,0,0,1,7-2.12c-1.2-1-2.58-2.1-4-3.15H2l.12-1.08c0-.08.15-1.48.33-3.79a7.86,7.86,0,0,0-.84,0h0l-.38,0c-.17.07-.31.21-.14.51a2.5,2.5,0,0,0,.74.85A2.47,2.47,0,0,1,.16,81.21c-.63-1,.67-1.87,2.16-1.75ZM76.78,49.11c.53-5.66,1.25-14.21,2.15-17.46a15.6,15.6,0,0,1-1.28-1,144.6,144.6,0,0,0-.87,18.5ZM74.63,80a11.89,11.89,0,0,1,1.8-.35c0-.46-.07-1-.1-1.48-.57.67-1.15,1.28-1.7,1.83Zm-5,3.82h7.17c-.06-.66-.15-1.61-.24-2.76a18.56,18.56,0,0,0-6.93,2.76ZM58.69,92.48l.07,0c1.06.59,4.54-.45,7.31-1.59a17.09,17.09,0,0,0-5.08-.6c-1.07,1-1.88,1.72-2.3,2.14ZM40.5,92.14c7,0,13-2.55,16.48-6.35.27-.3.53-.62.78-.94a.61.61,0,0,1,.07-.1,9.16,9.16,0,0,0,.61-.92,9.74,9.74,0,0,0,1.46-5.06c0-7.37-8.7-13.37-19.4-13.37s-19.4,6-19.4,13.37a9.83,9.83,0,0,0,1.45,5.06c.19.32.4.62.62.92l.08.1c.24.32.5.64.77.94,3.43,3.8,9.52,6.35,16.48,6.35ZM20,90.34a17.09,17.09,0,0,0-5.08.6c2.78,1.14,6.25,2.18,7.31,1.59l.07,0c-.42-.42-1.22-1.18-2.3-2.14ZM4.57,79.66a12.14,12.14,0,0,1,1.8.35c-.55-.55-1.13-1.16-1.7-1.83,0,.52-.07,1-.1,1.48Zm-.35,4.17h7.17a18.62,18.62,0,0,0-6.93-2.76c-.09,1.15-.18,2.1-.24,2.76Zm0-34.72a144.6,144.6,0,0,0-.87-18.5,15.6,15.6,0,0,1-1.28,1C3,34.9,3.68,43.45,4.22,49.11Z" />
    </svg>
  );
};

export const BoxBG = (props) => {
  return(
    <svg viewBox="0 0 95 95">
      <path fill="#FFF" d="M87.54,9.45a42.28,42.28,0,0,1-3-3A42.91,42.91,0,0,0,74.21,1H18.36a11,11,0,0,0-1.53.59A4.9,4.9,0,0,1,15.36,2.7,21.09,21.09,0,0,0,6,12.28a5.14,5.14,0,0,1,.12,1.59,5.15,5.15,0,0,1,.24,1.18c1,12.72.57,25.84.4,38.59-.09,6.5,0,13-.05,19.48,0,2-.11,4.08-.22,6.12a17.93,17.93,0,0,0,2.78,2.94A73.22,73.22,0,0,0,16.51,87H78l.07-.06a32.31,32.31,0,0,0,9.31-8.5c.13-6,.65-12,.36-18s.2-11.89.36-17.9c.16-6.53,0-13.11-.17-19.64C87.84,18.57,88.07,13.86,87.54,9.45Z"></path>
      <path fill="#000000" d="M85,0H9L0,9.05V80l9,9H85l9-9V9.05Zm6.55,10.08v7a29.26,29.26,0,0,0-3.24-6.78v-.13h-.08a20.45,20.45,0,0,0-9.13-7.69H84ZM75.6,86.52H18.36a19,19,0,0,1-11.3-7.73V10.25A19.27,19.27,0,0,1,18.4,2.48H75.64a18.94,18.94,0,0,1,11.3,7.73V78.75A19.27,19.27,0,0,1,75.6,86.52ZM2.47,21.18a31.7,31.7,0,0,1,3.24-8.8V76.64c-.3-.53-.62-1-.89-1.62a32.92,32.92,0,0,1-2.35-7.11Zm85.82-8.82c.3.53.62,1,.89,1.62a32.92,32.92,0,0,1,2.35,7.11V67.81a31.64,31.64,0,0,1-3.24,8.81ZM10.05,2.48h4.87a20.45,20.45,0,0,0-9.13,7.69H5.71v.13a29.26,29.26,0,0,0-3.24,6.78v-7ZM2.47,78.92v-7A29.45,29.45,0,0,0,5.71,78.7v.13h.08a20.45,20.45,0,0,0,9.13,7.69H10.05ZM84,86.52H79.08a20.45,20.45,0,0,0,9.13-7.69h.08V78.7a29.45,29.45,0,0,0,3.24-6.78v7Z"></path>
    </svg>
  );
}

export const AltBoxBG = (props) => {
  return (
    <svg viewBox="0 0 70 45">
      <polygon fill="#FEFEFE" points="68.8,22.5 55.8,43.3 14.2,43.3 1.2,22.5 14.2,1.8 14.3,1.7 55.7,1.7 55.8,1.8 "></polygon>
      <path fill="#000000" d="M59.1,0H10.9L0,17.2v10.5L10.9,45H59l11-17.2V17.2L59.1,0z M58.2,2.2l10,15.8v3L56.5,2.3l-0.1-0.1H58.2z M14.8,2.2h40.5 l0.1,0.1L68,22.5L55.3,42.8H14.7L2,22.5L14.8,2.2L14.8,2.2z M1.8,18l10-15.8h1.8l-0.1,0.1L1.8,21V18z M11.8,42.8L1.8,27v-3 l11.7,18.8H11.8z M68.2,27l-10,15.8h-1.7L68.2,24V27z"></path></svg>
  );
}

export const PersonalityBoxBG = (props) => {
  return (
  <svg viewBox="0 0 317 88.98">
    <path fill="#FEFEFE" d="M9.35,8,7,10.29a38.78,38.78,0,0,1,.35,6.19l.85,57c0,4.29.29,6.67,3.67,9.37l3.76,2.46c2.56,2,19.53,1.87,9.58,1.87l271.48-.68c3.29,0,5.19-2.23,7.75-4.28l3-2.64c3.38-2.7,1.7-2.4,1.7-6.69L310,17.06c0-4.28-.76-8-4.13-10.71h0a18.9,18.9,0,0,0-10.39-3.64L19.59,2.48A36.38,36.38,0,0,0,9.35,8Z"></path>
    <path fill="#000000" d="M305.89,0H11.1L0,9V79.93l11.1,9H305.89l11.11-9V9ZM294.34,86.5H22.6A24.06,24.06,0,0,1,8.69,78.78V10.24a24.36,24.36,0,0,1,14-7.76H294.4a24.09,24.09,0,0,1,13.91,7.72V78.73a24.36,24.36,0,0,1-14,7.77ZM3.05,21.16a27.77,27.77,0,0,1,4-8.79V76.63c-.37-.53-.76-1-1.09-1.62a27.78,27.78,0,0,1-2.89-7.1ZM310,12.34c.37.54.76,1.05,1.09,1.62A28,28,0,0,1,314,21.07V67.81a27.91,27.91,0,0,1-4,8.8Zm4-2.27v7a26.94,26.94,0,0,0-4-6.77v-.13h-.1a24.53,24.53,0,0,0-11.24-7.68h6ZM12.37,2.48h6A24.53,24.53,0,0,0,7.13,10.16H7v.13a26.94,26.94,0,0,0-4,6.77v-7ZM3.05,78.91v-7a26.81,26.81,0,0,0,4,6.78v.13h.1A24.61,24.61,0,0,0,18.37,86.5h-6ZM304.63,86.5h-6a24.61,24.61,0,0,0,11.24-7.68h.1v-.13a26.81,26.81,0,0,0,4-6.78v7Z"></path>
  </svg>
  );
}

export const FrameBG = () => {
  return (
    <svg viewBox="0 0 517 660">
      <path fill="#D8D8D8" d="M509.2,646.2c-1.7,5.7-12.9,11.7-14.5,11.7H22.5c-1.7,0-12.8-6-14.5-11.7L8.2,19.3V12S16.1,2.3,23.4,1.4H493.80005c7.3.8,15.1,10.6,15.1,10.6v7.3Z"></path>
      <path fill="#000000" d="M505.9,0H11L0,11.5v637L11,660H506l11-11.5V11.5ZM3,12.8l9.2-9.6h5.9A25.8384,25.8384,0,0,0,7,12.9H6.9v.2A36.38553,36.38553,0,0,0,3,21.7ZM3,26.9A42.92655,42.92655,0,0,1,6.9,15.7V644.3a13.90069,13.90069,0,0,1-1.1-2.1,51.50646,51.50646,0,0,1-2.9-9L3,26.9Zm9.2,629.9L3,647.2v-8.9a40.90524,40.90524,0,0,0,3.9,8.6v.2H7a24.86426,24.86426,0,0,0,11.1,9.8H12.2Zm10.1,0A22.56646,22.56646,0,0,1,8.6,647V13A23.74954,23.74954,0,0,1,22.4,3.1H494.6a22.56647,22.56647,0,0,1,13.7,9.8v634a23.74956,23.74956,0,0,1-13.8,9.9Zm491.6-9.6-9.2,9.6h-5.9a24.86437,24.86437,0,0,0,11.1-9.8h.1v-.2a36.38635,36.38635,0,0,0,3.9-8.6l.00006,9Zm0-14.1a41.717,41.717,0,0,1-3.9,11.2V15.7a13.89825,13.89825,0,0,1,1.1,2.1,51.50837,51.50837,0,0,1,2.9,9l-.1,606.3Zm0-611.4a40.9054,40.9054,0,0,0-3.9-8.6v-.2h-.1a24.86433,24.86433,0,0,0-11.1-9.8h5.9l9.2,9.6-.00007,9Z"></path>
    </svg>
  );
}

export const LargeFrameBG = () => {
  return (
    <svg viewBox="0 0 517 1128">
      <path fill="#000000" d="M 505.9,0 H 11 L 0,11.5 v 1104.7833 l 11,11.5 h 495 l 11,-11.5 V 11.5 Z M 3,12.8 12.2,3.2 h 5.9 C 13.536602,5.286901 9.6796108,8.6574246 7,12.9 H 6.9 v 0.2 C 5.2319527,15.785088 3.9209146,18.676096 3,21.7 Z M 3,26.9 C 3.7755383,23.004204 5.0880615,19.234907 6.9,15.7 v 1096.3833 c -0.4257964,-0.6674 -0.793801,-1.3699 -1.1,-2.1 -1.2405781,-2.9047 -2.2113345,-5.9174 -2.9,-9 z m 9.2,1097.6833 -9.2,-9.6 v -8.9 c 0.963646,3.0076 2.2723641,5.8935 3.9,8.6 v 0.2 H 7 c 2.6188893,4.3181 6.490611,7.7364 11.1,9.8 h -5.9 z m 10.1,0 c -5.660366,-1.376 -10.569366,-4.8875 -13.7,-9.8 V 13 C 11.822461,8.1118035 16.736964,4.5861819 22.4,3.1 h 472.2 c 5.66037,1.3759966 10.56936,4.8875435 13.7,9.8 v 1101.7833 c -3.22246,4.8882 -8.13696,8.4138 -13.8,9.9 z m 491.6,-9.6 -9.2,9.6 h -5.9 c 4.60938,-2.0636 8.48111,-5.4819 11.1,-9.8 h 0.1 v -0.2 c 1.66804,-2.6851 2.97908,-5.5761 3.9,-8.6 l 6e-5,9 z m 0,-14.1 c -0.75999,3.9 -2.07326,7.6715 -3.9,11.2 V 15.7 c 0.42581,0.667394 0.79381,1.369949 1.1,2.1 1.24057,2.904739 2.21132,5.91743 2.9,9 z M 513.9,21.7 c -0.96365,-3.00761 -2.27237,-5.893501 -3.9,-8.6 v -0.2 h -0.1 C 507.28111,8.5818689 503.40939,5.1635926 498.8,3.1 h 5.9 l 9.2,9.6 -7e-5,9 z"></path>
    </svg>
  );
}

export const FrameBGWhite = () => {
  return (
    <svg viewBox="0 0 517 660">
      <path fill="#000000" d="M505.9,0H11L0,11.5v637L11,660H506l11-11.5V11.5ZM3,12.8l9.2-9.6h5.9A25.8384,25.8384,0,0,0,7,12.9H6.9v.2A36.38553,36.38553,0,0,0,3,21.7ZM3,26.9A42.92655,42.92655,0,0,1,6.9,15.7V644.3a13.90069,13.90069,0,0,1-1.1-2.1,51.50646,51.50646,0,0,1-2.9-9L3,26.9Zm9.2,629.9L3,647.2v-8.9a40.90524,40.90524,0,0,0,3.9,8.6v.2H7a24.86426,24.86426,0,0,0,11.1,9.8H12.2Zm10.1,0A22.56646,22.56646,0,0,1,8.6,647V13A23.74954,23.74954,0,0,1,22.4,3.1H494.6a22.56647,22.56647,0,0,1,13.7,9.8v634a23.74956,23.74956,0,0,1-13.8,9.9Zm491.6-9.6-9.2,9.6h-5.9a24.86437,24.86437,0,0,0,11.1-9.8h.1v-.2a36.38635,36.38635,0,0,0,3.9-8.6l.00006,9Zm0-14.1a41.717,41.717,0,0,1-3.9,11.2V15.7a13.89825,13.89825,0,0,1,1.1,2.1,51.50837,51.50837,0,0,1,2.9,9l-.1,606.3Zm0-611.4a40.9054,40.9054,0,0,0-3.9-8.6v-.2h-.1a24.86433,24.86433,0,0,0-11.1-9.8h5.9l9.2,9.6-.00007,9Z"></path>
    </svg>
  );
}

export const AltFrameBG = () => {
  return (
    <svg viewBox="0 0 298 275">
      <path fill="#000000" d="M 297.85,6.39 V 4.47 h -6.14 V 0 h -2.68 c 0,0 -1.06,1.54 -3.91,1.54 H 12.73 C 9.88,1.54 8.82,0 8.82,0 H 6.14 V 4.47 H 0 v 1.92 c 2.53,0 2.67,4.14 2.67,4.14 v 244.53 c 0,0 -0.14,4.09 -2.67,4.09 v 2 h 6.14 v 7 H 8.82 V 3.31 H 289.03 V 264.84 H 8.82 v 3.31 c 0,0 1.06,-1.54 3.91,-1.54 h 272.39 c 2.84,0 3.9,1.52 3.91,1.54 h 2.68 v -7 h 6.14 v -2 c -2.53,0 -2.67,-4.13 -2.67,-4.13 V 10.53 c 0,0 0.14,-4.14 2.67,-4.14 z M 6.27,255.06 H 4.14 V 12.12 h 2.13 z m 287.64,0.48 h -2.12 V 12.61 h 2.12 z ">
      </path>
    </svg>
  );
}

export const LongFrameBG = () => {
  return (
    <svg viewBox="0 0 235 765">
      <path fill="#D8D8D8" d="M224.09593,719a32.58075,32.58075,0,0,0-1.22463-4.29c-1.70252-4.36-1.12506-582.66-1.12506-582.66s0-30.43-.57746-49c-.35841-11.85,1.71249-26.54,3.26566-35.6a3.99385,3.99385,0,0,1-1.48347-1.64c-1.69258-3.61-2.39947-7.49-.99563-11.35a6.27817,6.27817,0,0,1,.92593-1.69c-.697-3.15-.32855-6.48-1.29431-9.54a42.83292,42.83292,0,0,0-3.52453-7,18.648,18.648,0,0,0-4.97814-6.37c-1.99126-1.48-4.06215-2.5-5.77463-4.27-1.73238-.72-3.47475-1.42-5.17726-2.21l-.39825-.21H29.28142a5.06422,5.06422,0,0,1-3.56435,1.27,5.80144,5.80144,0,0,1-2.24016,1.44l-.3883.12-.18917.05c-.41816.25-.86619.47-1.28436.74a7.30725,7.30725,0,0,0-1.21466.84c.99563-.91-.25887.24-.448.41a5.81329,5.81329,0,0,1-2.81762,1.33,51.94484,51.94484,0,0,0-3.88295,4c-4.56993,5.47-4.80889,13.51-6.21272,20.2a1.8288,1.8288,0,0,1-.10952.4,11.12318,11.12318,0,0,1,.28873,1.52c-.1593-1.2.08961.35.13939.59q.13938.63.29869,1.26a21.06275,21.06275,0,0,0,.87615,2.57c1.06532,2.59-1.16488,5.4-3.47474,6.15a3.19358,3.19358,0,0,1-.69694.14C5.914,55.14,8.204,70.62,7.82564,83c-.57747,18.57-.57747,49-.57747,49s.6372,576.13-.99563,587.33a5.14529,5.14529,0,0,1,3.05658,6,29.22893,29.22893,0,0,1-2.65832,7,4.69483,4.69483,0,0,1,.84628,2.91c-.26882,14.38,12.077,22.59,23.66608,28.18a5.66959,5.66959,0,0,1,.87615.53h166.1703a5.05453,5.05453,0,0,1,2.82758-1.08,4.08858,4.08858,0,0,1,1.583-1.45c.99563-.5,2.061-.93,3.10635-1.37l.63722-.27-.54758.24a6.826,6.826,0,0,0,1.28437-.6c.219-.11.448-.18.677-.27.99562-1,1.85185-1.92,2.39946-2.37,2.89728-2.43,6.20278-4.26,7.82562-7.81a4.37454,4.37454,0,0,1,1.73239-2c.80645-4.9,2.12069-9.72,2.5687-14.7a5.33774,5.33774,0,0,1,.56752-2,1.92248,1.92248,0,0,0-.1095-.51c-.37835-1.74-.8662-3.44-1.27441-5.17A4.80654,4.80654,0,0,1,224.09593,719Z"></path>
      <path fill="#000000" d="M224.29507,654.52v-554c.76662-12.76,2.62847-38.62,5.49586-48.14L230,51.69l-.59738-.38a21.29124,21.29124,0,0,1-3.66391-3.14,63.02656,63.02656,0,0,1,2.32977-9.56l.11947-.34-2.47907-28.1-1.07527-.34c-2.509-.8-9.66754-4-9.66754-8.12V0H15.024V1.71c0,4.13-6.9694,7.26-9.66755,8.12l-1.07528.34L1.812,38.28l.11948.34a64.23307,64.23307,0,0,1,2.32977,9.54A20.93372,20.93372,0,0,1,.59738,51.32L0,51.7l.20908.69C3.07649,61.89,4.97814,87.7,5.695,100.48v554c-.71685,12.75-2.6185,48.62-5.48591,58.13L0,713.3l.59738.38a20.76441,20.76441,0,0,1,3.66391,3.14,61.86478,61.86478,0,0,1-2.32977,9.56l-.11948.35,2.46916,28.1,1.07528.34c2.68819.86,9.66755,4,9.66755,8.12V765H214.966v-1.71c0-4.13,6.9694-7.26,9.66754-8.12l1.07527-.34,2.46916-28.1-.11947-.35a64.23172,64.23172,0,0,1-2.32976-9.54,20.93312,20.93312,0,0,1,3.6639-3.16l.59738-.38-.20907-.69c-2.86741-9.5-4.71927-45.31-5.48592-58.09m-3.82321,73.29s.448,1.07.99563,2.61a29.91379,29.91379,0,0,1-1.32417,12.42c-2.91721,8.76-10.06582,15.16-20.76882,18.74H30.54587c-22.89945-7.63-22.70032-25.7-22.06312-31.09.58742-1.63,1.05537-2.75,1.08524-2.83a12.25228,12.25228,0,0,0-2.09082-9.76c3.36522-18.83,1.65274-42.81,1.57309-43.89V91.12c.08961-1.19,1.80209-25.21-1.56314-44.05a12.45343,12.45343,0,0,0,2.041-9.88s-.448-1.07-.99563-2.61A29.92378,29.92378,0,0,1,9.82685,22.16C12.764,13.4,19.91256,7,30.62552,3.42H199.44421c22.94921,7.63,22.7003,25.7,22.06311,31.09-.58741,1.63-1.05536,2.75-1.08523,2.84a12.23211,12.23211,0,0,0,2.09083,9.75c-3.36523,18.83-1.65275,42.81-1.57308,43.89V673.88c-.0896,1.19-1.80208,25.21,1.56314,44a12.45342,12.45342,0,0,0-2.041,9.88m7.87311-675.3c-1.71,6.15-3,17.57-4,28.45a191.48013,191.48013,0,0,1,1.5-30.51,23.5903,23.5903,0,0,0,2.5,2.06m-5.72-14.58c.09-.21,1.13-2.72,2.12-5.82l.51,5.74a61.15693,61.15693,0,0,0-1.75006,6.6,9.49991,9.49991,0,0,1-.89-6.47m.42-25.21,1.24,14.07a31.5754,31.5754,0,0,1-1,3.69,30.09944,30.09944,0,0,0-1.55-8.72c-2-6-6.88-13.57-18.42-18.34h8.89c1.25,5.24,8,8.26,10.8,9.3M18.17021,3.42h8.84118C10.44414,10.29,7.42738,23.17,7.17848,30.61c-.37834-1.25-.73677-2.56-.99563-3.82L7.41743,12.72c2.7778-1,9.50825-4.06,10.75278-9.3M5.22705,37.85l.50777-5.74c.99563,3.07,1.99125,5.53,2.061,5.66a9.76825,9.76825,0,0,1-.82637,6.56A62.4619,62.4619,0,0,0,5.247,37.85M4.64958,50.44A192.25139,192.25139,0,0,1,6.12311,81c-.99563-10.87-2.28-22.29-3.98251-28.44a21.82554,21.82554,0,0,0,2.47911-2.07m-2.47911,662c1.70252-6.15,2.98688-17.57,3.98251-28.44a192.24174,192.24174,0,0,1-1.49344,30.5,23.50089,23.50089,0,0,0-2.48907-2.06m5.695,14.58c-.0896.21-1.12506,2.72-2.11073,5.82l-.50777-5.74A60.75,60.75,0,0,0,6.9694,720.6a9.53688,9.53688,0,0,1,.8861,6.47m-.41816,25.21L6.18285,738.21a32.23,32.23,0,0,1,.99563-3.69,30.11827,30.11827,0,0,0,1.54322,8.72c1.99126,6,6.84992,13.57,18.33947,18.34h-8.891c-1.24453-5.24-7.965-8.26-10.75278-9.3m204.82758,9.3h-8.88c16.64-6.86,19.67-19.75,19.92-27.19.38,1.26.74,2.56,1,3.82l-1.24,14.07c-2.79,1-9.55,4.06-10.8,9.3m13-34.43-.51,5.74c-1-3.08-2-5.53-2.07-5.66a9.7301,9.7301,0,0,1,.85-6.56,62.23563,62.23563,0,0,0,1.73,6.48m.6-12.59a191.36971,191.36971,0,0,1-1.51-30.51c1,10.88,2.29,22.29,4,28.44a21.90029,21.90029,0,0,0-2.49,2.07"></path>  </svg>
  );
}

export const SmallFrameBG = () => {
  return (
    <svg viewBox="0 0 344 95">
      <polygon fill="#FEFEFE" points="8 93 337 93 337 2 8 2 8 93"></polygon>
      <path fill="#000000" d="M344,6.39V4.47h-6.14V0h-2.68s-1.06,1.54-3.91,1.54H12.73C9.88,1.54,8.82,0,8.82,0H6.14V4.47H0V6.39c2.53,0,2.67,4.14,2.67,4.14V81.91S2.53,86,0,86v2H6.14v7H8.82V3.31H335.18V91.69H8.82V95s1.06-1.54,3.91-1.54H331.27c2.84,0,3.9,1.52,3.91,1.54h2.68V88H344V86c-2.53,0-2.67-4.13-2.67-4.13V10.53S341.47,6.39,344,6.39ZM6.27,81.91H4.14V12.12H6.27Zm333.79.48h-2.12V12.61h2.12Z"></path>
    </svg>
  );
}

export const AltSmallFrameBG = () => {
  return (
  <svg viewBox="0 0 317 88.98">
    <path fill="#FEFEFE" d="M9.35,8,7,10.29a38.78,38.78,0,0,1,.35,6.19l.85,57c0,4.29.29,6.67,3.67,9.37l3.76,2.46c2.56,2,19.53,1.87,9.58,1.87l271.48-.68c3.29,0,5.19-2.23,7.75-4.28l3-2.64c3.38-2.7,1.7-2.4,1.7-6.69L310,17.06c0-4.28-.76-8-4.13-10.71h0a18.9,18.9,0,0,0-10.39-3.64L19.59,2.48A36.38,36.38,0,0,0,9.35,8Z"></path>
    <path fill="#000000" d="M305.89,0H11.1L0,9V79.93l11.1,9H305.89l11.11-9V9ZM294.34,86.5H22.6A24.06,24.06,0,0,1,8.69,78.78V10.24a24.36,24.36,0,0,1,14-7.76H294.4a24.09,24.09,0,0,1,13.91,7.72V78.73a24.36,24.36,0,0,1-14,7.77ZM3.05,21.16a27.77,27.77,0,0,1,4-8.79V76.63c-.37-.53-.76-1-1.09-1.62a27.78,27.78,0,0,1-2.89-7.1ZM310,12.34c.37.54.76,1.05,1.09,1.62A28,28,0,0,1,314,21.07V67.81a27.91,27.91,0,0,1-4,8.8Zm4-2.27v7a26.94,26.94,0,0,0-4-6.77v-.13h-.1a24.53,24.53,0,0,0-11.24-7.68h6ZM12.37,2.48h6A24.53,24.53,0,0,0,7.13,10.16H7v.13a26.94,26.94,0,0,0-4,6.77v-7ZM3.05,78.91v-7a26.81,26.81,0,0,0,4,6.78v.13h.1A24.61,24.61,0,0,0,18.37,86.5h-6ZM304.63,86.5h-6a24.61,24.61,0,0,0,11.24-7.68h.1v-.13a26.81,26.81,0,0,0,4-6.78v7Z"></path>
  </svg>
  );
}

export const FieldBG = () => {
  return (
    <svg viewBox="0 0 241 34">
      <g id="SenseRowBoxSvg-Page-1_1_">
        <g id="SenseRowBoxSvg-Sheet_Desktop_Static" transform="translate(-683.000000, -651.000000)">
          <path fill="#FEFEFE" d="m 692.60058,652.11636 21.84111,0.11594 2.86679,2.70074 200.27079,-0.27038 5.59867,6.08095 -0.0691,14.87294 -5.39316,5.64253 -200.30648,-0.1646 -3.5541,2.78059 -20.93693,0.14647 -7.42833,-9.39734 -1.13446,-8.6833 z" />
          <path id="SenseRowBoxSvg-Page-1" fill="#000000" d="M692.1,651.2c-5.7,3.8-9.1,10-9.1,16.8s3.4,13,9.1,16.8l0.3,0.2h22.1l0.3-0.2 c1.2-0.8,2.3-1.7,3.3-2.7h200.2l0.3-0.4c0.7-1.2,3-4.5,4.9-5.4l0.5-0.2l0-16.1l-0.5-0.2c-1.9-0.9-4.2-4.2-4.9-5.4l-0.3-0.4H718.1 c-1-1-2.1-1.9-3.3-2.7l-0.3-0.2h-22.1L692.1,651.2z M685.5,668c0-5.8,2.9-11.2,7.6-14.5h10.3c4.7,2.1,11.1,3.2,14.3,3.8 c2.3,3,3.7,6.8,3.7,10.7v0c0,3.9-1.3,7.7-3.7,10.7c-3.1,0.6-9.5,1.7-14.3,3.8h-10.3C688.4,679.2,685.5,673.8,685.5,668L685.5,668z M909.3,655.6c3.1,1.1,11.1,4.5,12.9,9.3l0,6.2c-1.9,4.8-9.9,8.2-12.9,9.3H729.9c-0.8-0.7-2.5-1.8-5.7-2.1c0.9-1.5,3-5.5,3-10.3 s-2-8.8-3-10.3c3.2-0.3,4.9-1.4,5.7-2.1H909.3z M723.1,657.8c0.6,1,3.1,5.2,3.1,10.2s-2.5,9.2-3.1,10.2c-0.6,0-1.3,0-2,0 c1.8-3.1,2.9-6.6,2.9-10.3v0c0-3.7-1-7.2-2.8-10.3C721.8,657.8,722.5,657.8,723.1,657.8L723.1,657.8z M713.8,682.5h-5.3 c3.2-1.3,6-2.1,8.3-2.6C715.9,680.8,714.9,681.7,713.8,682.5L713.8,682.5z M720.5,679.3c3.9-0.4,6.3,0.4,7.7,1.1h-8.5 C719.9,680,720.2,679.7,720.5,679.3L720.5,679.3z M917.4,680.4h-5.5c3.3-1.4,8.1-3.9,10.4-7.3v1.9 C920.1,676.3,918.1,679.3,917.4,680.4L917.4,680.4z M922.2,661v1.9c-2.3-3.4-7.1-5.9-10.4-7.3h5.5 C918.1,656.7,920.1,659.7,922.2,661L922.2,661z M728.1,655.6c-1.4,0.7-3.7,1.4-7.7,1.1c-0.3-0.4-0.5-0.7-0.8-1.1H728.1z M716.8,656.1c-2.4-0.5-5.1-1.3-8.3-2.6h5.3C714.9,654.3,715.9,655.2,716.8,656.1L716.8,656.1z"></path>
        </g>
      </g>
    </svg>
  );
}

export const SmallFeatureBG = () => {
  return (
    <svg viewBox="0 0 317 172">
      <path fill="#000000" d="M 305.89,0 H 11.1 L 0,9 v 155.0675 l 11.1,9 h 294.79 l 11.11,-9 V 9 Z M 294.34,170.6375 H 22.6 c -5.377901,-0.92164 -10.282833,-3.64386 -13.91,-7.72 V 10.24 c 3.659337,-4.0898105 8.592457,-6.8241683 14,-7.76 H 294.4 c 5.3771,0.9239195 10.28132,3.6457463 13.91,7.72 v 152.6675 c -3.65784,4.09351 -8.59114,6.83148 -14,7.77 z M 3.05,21.16 c 0.8097192,-3.141132 2.1635194,-6.116108 4,-8.79 v 148.3975 c -0.37,-0.53 -0.76,-1 -1.09,-1.62 -1.2868039,-2.22175 -2.2593945,-4.61115 -2.89,-7.1 z M 310,12.34 c 0.37,0.54 0.76,1.05 1.09,1.62 1.29207,2.22504 2.27128,4.617554 2.91,7.11 v 130.8775 c -0.81135,3.14366 -2.16498,6.12165 -4,8.8 z m 4,-2.27 v 7 c -0.99504,-2.440158 -2.34273,-4.721117 -4,-6.77 v -0.13 h -0.1 C 306.95295,6.6008199 303.05621,3.938278 298.66,2.49 h 6 z M 12.37,2.48 h 6 C 13.973792,3.928278 10.077051,6.5908199 7.13,10.16 H 7 v 0.13 c -1.6572735,2.048883 -3.0049596,4.329842 -4,6.77 v -7 z M 3.05,163.0475 v -7 c 0.9924704,2.4445 2.3403296,4.72912 4,6.78 v 0.13 h 0.1 c 2.944574,3.56286 6.832994,6.22445 11.22,7.68 h -6 z m 301.58,7.59 h -6 c 4.39426,-1.45221 8.28999,-4.11406 11.24,-7.68 h 0.1 v -0.13 c 1.65967,-2.05088 3.00753,-4.3355 4,-6.78 v 7 z"></path>
    </svg>
  );
}
