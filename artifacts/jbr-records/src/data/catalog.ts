const BASE = import.meta.env.BASE_URL;
const a = (p: string) => `${BASE}${p.replace(/^\//, "")}`;

export type Release = {
  title: string;
  image: string;
  tag: string;
  listen: string;
  year?: string;
};

export type Artist = {
  slug: string;
  name: string;
  portrait: string;
  hero?: string;
  smartLink: string;
  bio: string;
  releases: Release[];
};

const ericBenet: Artist = {
  slug: "eric-benet",
  name: "eric benét",
  portrait: a("images/jbr/eric-benet-portrait.jpg"),
  hero: a("images/jbr/eric-benet-hero.jpg"),
  smartLink: "https://ericbenet.lnk.to/music",
  bio: "grammy-nominated, four-time grammy nominated soul singer. co-founder of jbr creative group.",
  releases: [
    { title: "the co-star", image: a("images/jbr/releases/eric-catalog/the-co-star.webp"), tag: "new", year: "2025", listen: "https://ericbenet.net/music/the-co-star/" },
    { title: "can't wait", image: a("images/jbr/releases/eric-catalog/cant-wait.webp"), tag: "new", year: "2025", listen: "https://ericbenet.net/music/cant-wait/" },
    { title: "duets", image: a("images/jbr/releases/eric-catalog/duets.webp"), tag: "album", year: "2024", listen: "https://ericbenet.net/music/duets/" },
    { title: "so distracted (live)", image: a("images/jbr/releases/eric-catalog/so-distracted-live.webp"), tag: "live", listen: "https://ericbenet.net/music/so-distracted-live/" },
    { title: "so distracted", image: a("images/jbr/releases/eric-catalog/so-distracted.webp"), tag: "single", listen: "https://ericbenet.net/music/so-distracted/" },
    { title: "work it out", image: a("images/jbr/releases/eric-catalog/work-it-out.webp"), tag: "single", listen: "https://ericbenet.net/music/work-it-out/" },
    { title: "fly away", image: a("images/jbr/releases/eric-catalog/fly-away.webp"), tag: "single", listen: "https://ericbenet.net/music/fly-away/" },
    { title: "something we can make love to", image: a("images/jbr/releases/eric-catalog/something-we-can-make-love-to.webp"), tag: "single", listen: "https://ericbenet.net/music/something-we-can-make-love-to/" },
    { title: "can i spend my life with you", image: a("images/jbr/releases/eric-catalog/can-i-spend-my-life-with-you.webp"), tag: "single", listen: "https://ericbenet.net/music/can-i-spend-my-life-with-you/" },
    { title: "spend my life with you (remix)", image: a("images/jbr/releases/eric-catalog/spend-my-life-with-you-remix.webp"), tag: "remix", listen: "https://ericbenet.net/music/spend-my-life-with-you-remix/" },
    { title: "lady", image: a("images/jbr/releases/eric-catalog/lady.webp"), tag: "single", listen: "https://ericbenet.net/music/lady/" },
    { title: "last train", image: a("images/jbr/releases/eric-catalog/last-train.webp"), tag: "single", listen: "https://ericbenet.net/music/last-train/" },
    { title: "we could have been", image: a("images/jbr/releases/eric-catalog/we-could-have-been.webp"), tag: "single", listen: "https://ericbenet.net/music/we-could-have-been/" },
    { title: "can't stop", image: a("images/jbr/releases/eric-catalog/cant-stop.webp"), tag: "single", listen: "https://ericbenet.net/music/cant-stop/" },
    { title: "everything", image: a("images/jbr/releases/eric-catalog/everything.webp"), tag: "single", listen: "https://ericbenet.net/music/everything/" },
    { title: "insane", image: a("images/jbr/releases/eric-catalog/insane.webp"), tag: "single", listen: "https://ericbenet.net/music/insane/" },
    { title: "sunshine (radio edit)", image: a("images/jbr/releases/eric-catalog/sunshine-radio-edit.webp"), tag: "single", listen: "https://ericbenet.net/music/sunshine-radio-edit/" },
    { title: "정말 사랑했을까", image: a("images/jbr/releases/eric-catalog/_ec_a0_95_eb_a7_90-_ec_82_ac_eb_9e_91_ed_96_88_ec_9d_84_ea_b9_8c.webp"), tag: "single", listen: "https://ericbenet.net/music/%ec%a0%95%eb%a7%90-%ec%82%ac%eb%9e%91%ed%96%88%ec%9d%84%ea%b9%8c/" },
    { title: "the other one: pt. 1", image: a("images/jbr/releases/eric-catalog/the-other-one-pt-1.webp"), tag: "single", listen: "https://ericbenet.net/music/the-other-one-pt-1/" },
    { title: "the other one (revisited by the afropeans)", image: a("images/jbr/releases/eric-catalog/the-other-one-revisited-by-the-afropeans.webp"), tag: "remix", listen: "https://ericbenet.net/music/the-other-one-revisited-by-the-afropeans/" },
    { title: "news for you (remix)", image: a("images/jbr/releases/eric-catalog/news-for-you-remix.webp"), tag: "remix", listen: "https://ericbenet.net/music/news-for-you-remix/" },
    { title: "white christmas", image: a("images/jbr/releases/eric-catalog/white-christmas.webp"), tag: "holiday", listen: "https://ericbenet.net/music/white-christmas/" },
    { title: "christmas without you", image: a("images/jbr/releases/eric-catalog/christmas-without-you.webp"), tag: "holiday", listen: "https://ericbenet.net/music/christmas-without-you/" },
    { title: "eric benét (self-titled)", image: a("images/jbr/releases/eric-catalog/eric-benet.webp"), tag: "album", listen: "https://ericbenet.net/music/eric-benet/" },
    { title: "the one", image: a("images/jbr/releases/eric-catalog/the-one.webp"), tag: "album", listen: "https://ericbenet.net/music/the-one/" },
    { title: "lost in time", image: a("images/jbr/releases/eric-catalog/lost-in-time.webp"), tag: "album", listen: "https://ericbenet.net/music/lost-in-time/" },
    { title: "love & life", image: a("images/jbr/releases/eric-catalog/love-life.webp"), tag: "album", listen: "https://ericbenet.net/music/love-life/" },
    { title: "hurricane", image: a("images/jbr/releases/eric-catalog/hurricane.webp"), tag: "album", listen: "https://ericbenet.net/music/hurricane/" },
    { title: "true to myself", image: a("images/jbr/releases/eric-catalog/true-to-myself.webp"), tag: "album", listen: "https://ericbenet.net/music/true-to-myself/" },
    { title: "pretty baby", image: a("images/jbr/releases/eric-catalog/pretty-baby.webp"), tag: "single", listen: "https://ericbenet.net/music/pretty-baby/" },
  ],
};

const joeLeone: Artist = {
  slug: "joe-leone",
  name: "joe leone",
  portrait: a("images/jbr/joe-leone-jbr.jpg"),
  smartLink: "https://joeleone.lnk.to/music",
  bio: "modern crooner reviving the great american songbook with cinematic warmth.",
  releases: [
    { title: "the gift", image: a("images/jbr/releases/lnkto/joe-thegift.jpg"), tag: "ep", listen: "https://joeleone.lnk.to/thegift" },
    { title: "invited", image: a("images/jbr/releases/lnkto/joe-invited.jpg"), tag: "single", listen: "https://joeleone.lnk.to/invited" },
    { title: "god's favorite", image: a("images/jbr/releases/lnkto/joe-gods-favorite.jpg"), tag: "single", listen: "https://joeleone.lnk.to/gods-favorite" },
    { title: "where have you been", image: a("images/jbr/releases/lnkto/joe-wherehaveyoubeen.jpg"), tag: "single", listen: "https://joeleone.lnk.to/wherehaveyoubeen" },
    { title: "discipline", image: a("images/jbr/releases/lnkto/joe-discipline.jpg"), tag: "single", listen: "https://joeleone.lnk.to/discipline" },
    { title: "over under / save face", image: a("images/jbr/releases/lnkto/joe-overunder.jpg"), tag: "single", listen: "https://joeleone.lnk.to/overunder-saveface" },
  ],
};

const autumnPaige: Artist = {
  slug: "autumn-paige",
  name: "autumn paige",
  portrait: a("images/jbr/autumn-paige-portrait.jpg"),
  smartLink: "https://autumnpaige.lnk.to/music",
  bio: "los angeles-based pop-soul artist, model, and actress signed to jbr.",
  releases: [
    { title: "money money money", image: a("images/jbr/releases/lnkto/autumn-money.jpg"), tag: "pre-save", listen: "https://autumnpaige.lnk.to/money" },
    { title: "let ya", image: a("images/jbr/releases/lnkto/autumn-let-ya.jpg"), tag: "single", year: "2025", listen: "https://autumnpaige.lnk.to/let-ya" },
    { title: "down the rabbit hole — acoustics", image: a("images/jbr/releases/lnkto/autumn-rabbithole-acoustic.jpg"), tag: "acoustic", year: "2025", listen: "https://autumnpaige.lnk.to/downtherabbitholeacoustics" },
    { title: "down the rabbit hole", image: a("images/jbr/releases/lnkto/autumn-rabbithole.jpg"), tag: "ep", year: "2025", listen: "https://autumnpaige.lnk.to/downtherabbithole" },
    { title: "baggage", image: a("images/jbr/releases/lnkto/autumn-baggage.jpg"), tag: "single", year: "2025", listen: "https://www.deezer.com/album/703802421" },
    { title: "topless", image: a("images/jbr/releases/lnkto/autumn-topless.jpg"), tag: "single", year: "2024", listen: "https://open.spotify.com/track/3xugpe72CNOypPnJwGaRmG" },
    { title: "altar", image: a("images/jbr/releases/lnkto/autumn-altar.jpg"), tag: "debut", year: "2024", listen: "https://open.spotify.com/album/2s7AHuMbdbEN3GWKyFrIEo" },
  ],
};

export const ARTISTS: Artist[] = [ericBenet, joeLeone, autumnPaige];

export function getArtist(slug: string): Artist | undefined {
  return ARTISTS.find((x) => x.slug === slug);
}

export function getAllReleases(): Array<Release & { artist: string; artistSlug: string }> {
  return ARTISTS.flatMap((ar) =>
    ar.releases.map((r) => ({ ...r, artist: ar.name, artistSlug: ar.slug })),
  );
}
