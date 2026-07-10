import subprocess, os, json, time

PAIRS = [
    ("HenneStrand1_web.mp4", "Henne Strand1.MOV"),
    ("Fadeless1_web.mp4", "Fadeless1.MOV"),
    ("Myprotein_web.mp4", "Myprotein.MOV"),
    ("Fadeless2_web.mp4", "Fadeless2.MOV"),
    ("Fadeless_web.mp4", "Fadeless.MOV"),
    ("MassageHenneStrand_web.mp4", "Massage Henne Strand.MOV"),
    ("HotelKreta_web.mp4", "Hotelcontent Kreta.mp4"),
    ("VillaNautica1_web.mp4", "Villa Nautica1.MOV"),
    ("VillaNautica_web.mp4", "Villa Nautica.MOV"),
    ("Campanyon_web.mp4", "Campanyon.MOV"),
    ("Campanyon1_web.mp4", "Campanyon1.mov"),
    ("VillaNautica2_web.mp4", "Villa Nautica2.MOV"),
    ("HytteHenneStrand_web.mp4", "Hytte Henne Strand.MOV"),
    ("Landsted_web.mp4", "Estate.MOV"),
    ("Kollagen_Protein_web.mp4", "Kollagen Protein.dk.mp4"),
    ("Fuld_langebordslampe_web.mp4", "Fuld langebordslampe.mp4"),
    ("Trento_gulvlampe_web.mp4", "Trento gulvlampe.mp4"),
    ("Kreaverket_web.mp4", "Kreaværket.mp4"),
    ("HenneStrand_web.mp4", "Henne Strand.MOV"),
    ("Gut_Repair_Proteindk_web.mp4", "Gut Repair Proteindk.mp4"),
    ("Protein_pulver_web.mp4", "Protein pulver.mp4"),
    ("Sengeverden_web.mp4", "Ellen_kontinentalseng-fra-sengeverden_9x16.mp4"),
    ("EngelskCampanyon_web.mp4", "Engelsk Campanyon.MP4"),
    ("Protein_dk_fuld_video_web.mp4", "Protein.dk fuld video.mp4"),
    ("HenneStrandVlog_web.mp4", "Henne Strand vlog.mp4"),
    ("GymInterview_web.mp4", "interview (1).mp4"),
]

OUTDIR = "/sessions/inspiring-serene-hopper/mnt/Portolio/site-updates"
SRCDIR = "/sessions/inspiring-serene-hopper/mnt/Portolio"
DONE_LOG = os.path.join(OUTDIR, "_audio_fix_done.json")

if os.path.exists(DONE_LOG):
    done = set(json.load(open(DONE_LOG)))
else:
    done = set()

start = time.time()
BUDGET = 37

for out_name, src_name in PAIRS:
    if out_name in done:
        continue
    elapsed = time.time() - start
    if elapsed > BUDGET:
        print("Time budget reached, stopping for this call.")
        break
    src = os.path.join(SRCDIR, src_name)
    out = os.path.join(OUTDIR, out_name)
    if not os.path.exists(src):
        print("MISSING SRC:", src_name)
        done.add(out_name)
        continue
    remaining = BUDGET - elapsed
    if remaining < 6:
        break
    try:
        cmd = [
            "ffmpeg","-y","-i", src,
            "-vf", "scale='if(gt(iw,ih),-2,1080)':'if(gt(iw,ih),1080,-2)'",
            "-c:v","libx264","-crf","23","-preset","veryfast",
            "-c:a","aac","-b:a","128k",
            out
        ]
        t0 = time.time()
        subprocess.run(cmd, check=True, capture_output=True, timeout=remaining)
        done.add(out_name)
        print("OK (%.1fs):" % (time.time()-t0), out_name)
    except subprocess.TimeoutExpired:
        print("TIMEOUT (partial, will retry next run):", out_name)
        break
    except subprocess.CalledProcessError as e:
        print("FFMPEG ERROR:", out_name, (e.stderr or b"")[-300:])
        break

json.dump(sorted(done), open(DONE_LOG, "w"))
print("Total done:", len(done), "/", len(PAIRS))
