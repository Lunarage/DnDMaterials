import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Page,
  EmptyPage,
  Weapon,
  Potion,
  Armor,
  Item,
  Basic,
  Empty,
} from "../components/cards";
import * as weapon from "../definitions/weapons";
import * as potion from "../definitions/potions";
import * as armor from "../definitions/armor";
import * as magicitem from "../definitions/magic_items";
import * as gear from "../definitions/gear";

export default function Home() {
  return (
    <main className={styles.main}>
      <Page>
        <Weapon weapon={weapon.rapier} />
        <Armor armor={armor.leather} />
        <Weapon weapon={weapon.longbow} />
        <Item item={gear.rope_hempen} />
        <Item item={gear.crowbar} />
        <Item item={gear.hammer} />
        <Item item={gear.tinderbox} />
        <Item item={gear.waterskin} />
      </Page>
      <Page>
        <Item item={magicitem.cloak_of_elvenkind_front} />
        <Item item={magicitem.lantern_of_revealing_front} />
        <Item item={magicitem.immovable_rod_front} />
        <Item item={magicitem.necklace_of_fireballs_front} />
        <Weapon weapon={weapon.dragon_slayer_front} />
        <Weapon weapon={weapon.hew_front} />
        <Empty />
        <Empty />
      </Page>
      <Page>
        <Basic item={magicitem.necklace_of_fireballs_back} />
        <Basic item={magicitem.immovable_rod_back} />
        <Basic item={magicitem.lantern_of_revealing_back} />
        <Basic item={magicitem.cloak_of_elvenkind_back} />
        <Empty />
        <Empty />
        <Basic item={weapon.hew_back} />
        <Basic item={weapon.dragon_slayer_back} />
      </Page>
      <Page>
        <Item item={magicitem.pole_of_collapsing} />
        <Item item={magicitem.lute_of_illusions} />
        <Item item={magicitem.clockwork_amulet} />
        <Item item={magicitem.cloak_of_many_fashions} />
        <Item item={magicitem.cloak_of_billowing} />
        <Item item={magicitem.dust_of_disappearance} />
        <Item item={magicitem.goggles_of_night} />
        <Item item={magicitem.mystery_key} />
      </Page>
      <Page>
        <Item item={magicitem.mute_crowbar} />
        <Item item={magicitem.releasing_hook} />
        <Item item={magicitem.unending_coil} />
        <Item item={magicitem.flutterscope} />
        <Item item={magicitem.ring_of_beards} />
        <Item item={magicitem.preservative_jar} />
        <Item item={magicitem.mug_of_infinite_coffee} />
        <Item item={magicitem.ring_of_feign_death} />
      </Page>
      <Page>
        <Item item={magicitem.ring_of_warmth} />
        <Item item={magicitem.ring_of_warmth} />
        <Item item={magicitem.ring_of_warmth} />
        <Item item={magicitem.ring_of_warmth} />
        <Item item={magicitem.ring_of_warmth} />
        <Item item={magicitem.boots_of_elvenkind} />
        <Item item={magicitem.bracers_of_archery} />
        <Item item={magicitem.gauntlets_of_ogre_power} />
      </Page>
      <Page>
        <Item item={gear.healers_kit} />
        <Item item={gear.healers_kit} />
        <Item item={gear.healers_kit} />
        <Item item={gear.healers_kit} />
        <Item item={gear.healers_kit} />
        <Item item={gear.healers_kit} />
        <Item item={gear.healers_kit} />
        <Item item={gear.healers_kit} />
      </Page>
      <Page>
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing} />
      </Page>
      <Page>
        <Item item={potion.healing} />
        <Item item={potion.healing} />
        <Item item={potion.healing_greater} />
        <Item item={potion.healing_greater} />
        <Item item={potion.healing_superior} />
        <Item item={potion.healing_superior} />
        <Item item={potion.healing_supreme} />
        <Item item={potion.healing_supreme} />
      </Page>
      <Page>
        <Item item={potion.water_breathing} />
        <Item item={potion.invurnerability} />
      </Page>
      <Page>
        <Armor armor={armor.padded} />
        <Armor armor={armor.padded} />
        <Armor armor={armor.padded} />
        <Armor armor={armor.padded} />
        <Armor armor={armor.leather} />
        <Armor armor={armor.leather} />
        <Armor armor={armor.leather} />
        <Armor armor={armor.leather} />
      </Page>
      <Page>
        <Armor armor={armor.studded_leather} />
        <Armor armor={armor.studded_leather} />
        <Armor armor={armor.studded_leather} />
        <Armor armor={armor.studded_leather} />
        <Armor armor={armor.hide} />
        <Armor armor={armor.hide} />
        <Armor armor={armor.hide} />
        <Armor armor={armor.hide} />
      </Page>
      <Page>
        <Armor armor={armor.chain_shirt} />
        <Armor armor={armor.chain_shirt} />
        <Armor armor={armor.chain_shirt} />
        <Armor armor={armor.chain_shirt} />
        <Armor armor={armor.scale_mail} />
        <Armor armor={armor.scale_mail} />
        <Armor armor={armor.scale_mail} />
        <Armor armor={armor.scale_mail} />
      </Page>
      <Page>
        <Armor armor={armor.breastplate} />
        <Armor armor={armor.breastplate} />
        <Armor armor={armor.breastplate} />
        <Armor armor={armor.breastplate} />
        <Armor armor={armor.half_plate} />
        <Armor armor={armor.half_plate} />
        <Armor armor={armor.half_plate} />
        <Armor armor={armor.half_plate} />
      </Page>
      <Page>
        <Armor armor={armor.ring_mail} />
        <Armor armor={armor.ring_mail} />
        <Armor armor={armor.ring_mail} />
        <Armor armor={armor.ring_mail} />
        <Armor armor={armor.chain_mail} />
        <Armor armor={armor.chain_mail} />
        <Armor armor={armor.chain_mail} />
        <Armor armor={armor.chain_mail} />
      </Page>
      <Page>
        <Armor armor={armor.splint} />
        <Armor armor={armor.splint} />
        <Armor armor={armor.splint} />
        <Armor armor={armor.splint} />
        <Armor armor={armor.plate} />
        <Armor armor={armor.plate} />
        <Armor armor={armor.plate} />
        <Armor armor={armor.plate} />
      </Page>
      <Page>
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
        <Armor armor={armor.shield} />
      </Page>
      <Page>
        <Armor armor={armor.chain_mail_mithril} />
        <Weapon weapon={weapon.longbow_1} />
        <Weapon weapon={weapon.mace_1} />
        <Weapon weapon={weapon.shortsword_1} />
      </Page>
      <Page>
        <Weapon weapon={weapon.battleaxe} />
        <Weapon weapon={weapon.battleaxe} />
        <Weapon weapon={weapon.battleaxe} />
        <Weapon weapon={weapon.battleaxe} />
        <Weapon weapon={weapon.club} />
        <Weapon weapon={weapon.club} />
        <Weapon weapon={weapon.club} />
        <Weapon weapon={weapon.club} />
      </Page>
      <Page>
        <Weapon weapon={weapon.crossbow_heavy} />
        <Weapon weapon={weapon.crossbow_heavy} />
        <Weapon weapon={weapon.crossbow_heavy} />
        <Weapon weapon={weapon.crossbow_heavy} />
        <Weapon weapon={weapon.crossbow_light} />
        <Weapon weapon={weapon.crossbow_light} />
        <Weapon weapon={weapon.crossbow_light} />
        <Weapon weapon={weapon.crossbow_light} />
      </Page>
      <Page>
        <Weapon weapon={weapon.dagger} />
        <Weapon weapon={weapon.dagger} />
        <Weapon weapon={weapon.dagger} />
        <Weapon weapon={weapon.dagger} />
        <Weapon weapon={weapon.flail} />
        <Weapon weapon={weapon.flail} />
        <Weapon weapon={weapon.flail} />
        <Weapon weapon={weapon.flail} />
      </Page>
      <Page>
        <Weapon weapon={weapon.glavie} />
        <Weapon weapon={weapon.glavie} />
        <Weapon weapon={weapon.glavie} />
        <Weapon weapon={weapon.glavie} />
        <Weapon weapon={weapon.greataxe} />
        <Weapon weapon={weapon.greataxe} />
        <Weapon weapon={weapon.greataxe} />
        <Weapon weapon={weapon.greataxe} />
      </Page>
      <Page>
        <Weapon weapon={weapon.greatclub} />
        <Weapon weapon={weapon.greatclub} />
        <Weapon weapon={weapon.greatclub} />
        <Weapon weapon={weapon.greatclub} />
        <Weapon weapon={weapon.greatsword} />
        <Weapon weapon={weapon.greatsword} />
        <Weapon weapon={weapon.greatsword} />
        <Weapon weapon={weapon.greatsword} />
      </Page>
      <Page>
        <Weapon weapon={weapon.halberd} />
        <Weapon weapon={weapon.halberd} />
        <Weapon weapon={weapon.halberd} />
        <Weapon weapon={weapon.halberd} />
        <Weapon weapon={weapon.handaxe} />
        <Weapon weapon={weapon.handaxe} />
        <Weapon weapon={weapon.handaxe} />
        <Weapon weapon={weapon.handaxe} />
      </Page>
      <Page>
        <Weapon weapon={weapon.handcrossbow} />
        <Weapon weapon={weapon.handcrossbow} />
        <Weapon weapon={weapon.handcrossbow} />
        <Weapon weapon={weapon.handcrossbow} />
        <Weapon weapon={weapon.javelin} />
        <Weapon weapon={weapon.javelin} />
        <Weapon weapon={weapon.javelin} />
        <Weapon weapon={weapon.javelin} />
      </Page>
      <Page>
        <Weapon weapon={weapon.lighthammer} />
        <Weapon weapon={weapon.lighthammer} />
        <Weapon weapon={weapon.lighthammer} />
        <Weapon weapon={weapon.lighthammer} />
        <Weapon weapon={weapon.longbow} />
        <Weapon weapon={weapon.longbow} />
        <Weapon weapon={weapon.longbow} />
        <Weapon weapon={weapon.longbow} />
      </Page>
      <Page>
        <Weapon weapon={weapon.longsword} />
        <Weapon weapon={weapon.longsword} />
        <Weapon weapon={weapon.longsword} />
        <Weapon weapon={weapon.longsword} />
        <Weapon weapon={weapon.mace} />
        <Weapon weapon={weapon.mace} />
        <Weapon weapon={weapon.mace} />
        <Weapon weapon={weapon.mace} />
      </Page>
      <Page>
        <Weapon weapon={weapon.maul} />
        <Weapon weapon={weapon.maul} />
        <Weapon weapon={weapon.maul} />
        <Weapon weapon={weapon.maul} />
        <Weapon weapon={weapon.morningstar} />
        <Weapon weapon={weapon.morningstar} />
        <Weapon weapon={weapon.morningstar} />
        <Weapon weapon={weapon.morningstar} />
      </Page>
      <Page>
        <Weapon weapon={weapon.pike} />
        <Weapon weapon={weapon.pike} />
        <Weapon weapon={weapon.pike} />
        <Weapon weapon={weapon.pike} />
        <Weapon weapon={weapon.quarterstaff} />
        <Weapon weapon={weapon.quarterstaff} />
        <Weapon weapon={weapon.quarterstaff} />
        <Weapon weapon={weapon.quarterstaff} />
      </Page>
      <Page>
        <Weapon weapon={weapon.rapier} />
        <Weapon weapon={weapon.rapier} />
        <Weapon weapon={weapon.rapier} />
        <Weapon weapon={weapon.rapier} />
        <Weapon weapon={weapon.scimitar} />
        <Weapon weapon={weapon.scimitar} />
        <Weapon weapon={weapon.scimitar} />
        <Weapon weapon={weapon.scimitar} />
      </Page>
      <Page>
        <Weapon weapon={weapon.shortbow} />
        <Weapon weapon={weapon.shortbow} />
        <Weapon weapon={weapon.shortbow} />
        <Weapon weapon={weapon.shortbow} />
        <Weapon weapon={weapon.shortsword} />
        <Weapon weapon={weapon.shortsword} />
        <Weapon weapon={weapon.shortsword} />
        <Weapon weapon={weapon.shortsword} />
      </Page>
      <Page>
        <Weapon weapon={weapon.sickle} />
        <Weapon weapon={weapon.sickle} />
        <Weapon weapon={weapon.sickle} />
        <Weapon weapon={weapon.sickle} />
        <Weapon weapon={weapon.sling} />
        <Weapon weapon={weapon.sling} />
        <Weapon weapon={weapon.sling} />
        <Weapon weapon={weapon.sling} />
      </Page>
      <Page>
        <Weapon weapon={weapon.spear} />
        <Weapon weapon={weapon.spear} />
        <Weapon weapon={weapon.spear} />
        <Weapon weapon={weapon.spear} />
        <Weapon weapon={weapon.trident} />
        <Weapon weapon={weapon.trident} />
        <Weapon weapon={weapon.trident} />
        <Weapon weapon={weapon.trident} />
      </Page>
      <Page>
        <Weapon weapon={weapon.warhammer} />
        <Weapon weapon={weapon.warhammer} />
        <Weapon weapon={weapon.warhammer} />
        <Weapon weapon={weapon.warhammer} />
        <Weapon weapon={weapon.warpick} />
        <Weapon weapon={weapon.warpick} />
        <Weapon weapon={weapon.warpick} />
        <Weapon weapon={weapon.warpick} />
      </Page>
      <Page>
        <Weapon weapon={weapon.whip} />
        <Weapon weapon={weapon.whip} />
        <Weapon weapon={weapon.whip} />
        <Weapon weapon={weapon.whip} />
        <Weapon weapon={weapon.rapier} />
        <Weapon weapon={weapon.rapier} />
        <Weapon weapon={weapon.shortsword} />
        <Weapon weapon={weapon.shortsword} />
      </Page>
    </main>
  );
}
