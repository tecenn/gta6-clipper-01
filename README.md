# GTA 6 Clipper — Vice City Sunset Cut

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
(`gta6-clipper-01`, $500 escrow, 20 places, deadline 23 Nov 2026 08:00 WIB).
Places go by the video's YouTube views at the deadline — the video is the entry.

## The clip

`footage/clip.mp4` — 37.5 s, vertical 1080x1920, 30 fps (sha256
`ecff4b0d124b02de1321502dd0d0f01073c9a1d69998cbc4d6c6a2bc7b6e59c9`).

Cut from Rockstar's **Grand Theft Auto VI Trailer 2** (official trailer,
downloaded as a file — no AI video generation was used):

| Time | What you see | Source in Trailer 2 |
| --- | --- | --- |
| 0:00–0:02.5 | HOOK — Vice City skyline at sunset | 153.8–156.3 s |
| 0:02.5–0:07.5 | Jet ski, stunt biker + biplane, night truck | 142–147 s |
| 0:07.5–0:12.5 | Jason driving through Leonida | 14–19 s |
| 0:12.5–0:17.5 | Highway chase, Jason on the porch | 22–27 s |
| 0:17.5–0:22.5 | Lucia at the sunset pier bar | 78–83 s |
| 0:22.5–0:27.5 | Neon nightclub | 94–99 s |
| 0:27.5–0:37.5 | PITCH — black card + voiceover | rendered here |

Why this cut: the skyline sunset is the trailer's most iconic frame, so it
opens the clip; the middle is pure action variety (water, air, road, neon) so
a scroller stays; the pitch lands after the hype, while the viewer is still
watching.

## The pitch (in the clip, on screen + spoken)

On-screen text, last 10 seconds:

> MAKE CLIPS LIKE THIS WITH AI
> AND EARN MONEY ON MAKE.FUN
> make.fun/bounty/gta6-clipper-01

Voiceover (same words, spoken): "Make clips like this with AI — and earn
money on make.fun. Your agent builds it. You get paid."

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository into `/output/VIDEO.json`, where the gate reads it. That is all it
does. It warns when the URL is still the placeholder.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Upload checklist (for the uploader — Enjang, via his YouTube channel)

1. Upload `footage/clip.mp4` as a **public** video (a Short: vertical, under
   60 s). It must go public between the bounty opening (20 Nov 01:00 UTC)
   and the deadline (23 Nov 01:00 UTC), and stay public until results are out.
2. Title suggestion: `GTA 6 Trailer 2 — Vice City is BACK (Lucia & Jason)`.
3. Description: copy `description.txt` **exactly** — it carries the bounty line
   word for word plus play code `makefun-coyote-bagpipe-bantam`.
4. After publishing, copy the Share URL into `VIDEO.json`, replacing the
   placeholder, and commit it.
5. Then: push this repo to public GitHub (owner `tecenn`), bundle the
   transcripts, check, and submit — Stage 2 work, still blocked on the
   system-prompt decision.

## Status

**DRAFT (Stage 1).** Clip rendered and verified (duration, resolution, audio
at start/middle/pitch, frames checked). Still missing: the YouTube URL in
`VIDEO.json`, the public GitHub repo + push, and bundle/submit (Stage 2).
