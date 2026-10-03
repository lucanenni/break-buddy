# Activity guide: build your own BreakBuddy

*Versione italiana: [GUIDA-ATTIVITA.md](GUIDA-ATTIVITA.md)*

**Duration:** about 1 hour
**Tool:** [BreakBuddy](https://lucanenni.github.io/break-buddy/) — a block editor that runs in the browser, nothing to install
**Who it's for:** people who have never programmed (or almost never) and want to discover the basic ideas of coding by building something useful

> **Language:** the app follows your browser language. To switch, use the **🌐** selector at the top of the page (Italiano / English). The names of the blocks and buttons in this guide are the English ones.

---

## Goal

By the end of the hour you will have a digital "buddy" that reminds you to take a break after a certain number of minutes and stops nagging only when you confirm you've taken it — and you will have learned the core ideas of programming: **events**, **sequences of instructions**, **variables** and **conditions**.

---

## Part 1 — What is coding? (10 minutes)

Programming means giving a computer precise instructions, one after another, so that it carries them out on its own. Here we do it **with blocks**: instead of typing text, you snap colourful pieces together like a puzzle — the same approach as tools like Scratch or MakeCode Arcade. Blocks remove syntax errors (you can't "misspell" a block) and let you focus on the logic.

Four ideas are enough to understand almost every program:

1. **Event** — "when X happens, do Y". It is the starting point of every orange block in BreakBuddy: *when the buddy turns on*, *after N minutes without a break*, *when I press a button*.
2. **Sequence** — the instructions inside an event run in the order you snap them together, one after another, from top to bottom.
3. **Variable** — a named container that holds a number (or some text) which you can read, change, and make grow.
4. **Condition** — "if this happens, then do that" — it lets the program behave differently depending on the situation.

Open [lucanenni.github.io/break-buddy](https://lucanenni.github.io/break-buddy/): this is **BreakBuddy Studio**, the block editor. The workspace starts empty on purpose, so you can build the program together during the activity. Open the **"Block legend"** below the workspace: it explains in one line what each available block does — keep it handy during the activity.

---

## Part 2 — Look at an example (10 minutes)

Press **"📖 See an example"** at the top: it loads a ready-made reference program that does three things:

- **`when the buddy turns on`** → the buddy shows a happy face. It runs only once, at start-up.
- **`after 20 minutes without a break, notify`** → the buddy says "Time for a break!", switches to a "tired" face and plays a bell. From here the count **freezes**: it won't notify a second time until you tell it you've taken the break.
- **`when I press “I took a break”`** → the **`reset the break timer`** block sets the count back to zero, then the buddy thanks you and goes back to being happy.

Try pressing **▶ Start**, then change the simulation speed at the top (use "Fast test" so you don't have to wait 20 real minutes) and watch: the buddy notifies once and stays "tired" until you click **🙌 I took a break**. Also open **"See the generated code"**: it is the real code your blocks produce — you don't need to know how to write it, but it's useful to see that behind every block there is a real instruction.

---

## Part 3 — Build your own buddy (25 minutes)

Now it's your turn. You can start from the example you just saw and modify it, or press **"🗑️ Clear all"** to empty the workspace and build from scratch. Some ideas, from the simplest to the most challenging:

1. **Change the times and messages.** Edit the number of minutes in the "after N minutes" block, change what the buddy says, try another face or another sound.
2. **Add variety with `the buddy says one of these at random`.** It replaces the fixed message with three phrases picked at random each time — your first taste of "unpredictable" behaviour.
3. **Add a health tip.** The `the buddy suggests to` block has ready-made tips (drink water, stretch, walk, rest your eyes, check your posture): snap it in after the break notification.
4. **Count your breaks with a variable.** In the "Variables" category create a variable (e.g. `breaks_taken`), set it to 0 in `when the buddy turns on`, then use the block that increases it by 1 inside `when I press “I took a break”`. Show its value with `the buddy shows the number`.
5. **Add a condition.** With `if... then...` and the compare blocks you can make the buddy say something special when the variable reaches a certain number — e.g. "if breaks_taken = 5, then the buddy says 'You're consistent, well done!'".
6. **Play with the scene.** `change the scene to` (day / sunset / night) and the `repeat N times` block let you make the buddy "blink" with several quick face changes in a row.

There is no single right solution: the goal is to try, press Start, see what happens, and fix it. If a block causes an error, the buddy tells you, and the "See the generated code" section helps you understand what was actually executed.

---

## Part 4 — Reflect and share (10 minutes)

Look once more at the generated code next to your blocks and try to answer:

- Which events did you use? What happens *inside* each one?
- Where did you use a variable? Why wasn't a fixed number enough?
- If you had to explain your program to someone who had never seen it, in what order would you tell them what it does?

If you're working in a group, show your buddies to each other in turn: it's the fastest way to discover solutions you hadn't thought of. You can also swap programs: in **💾 Programs**, **📤 Export** saves one as a `.json` file and **📥 Import from file** loads someone else's.

---

## Working on your own after the activity

When the hour is over, here is how to keep going by yourself:

- **You have nothing to lose.** "🗑️ Clear all" empties the workspace and "📖 See an example" reloads the reference program: you can always start over without worry.
- **Change one thing at a time.** When something doesn't work the way you want, it's easier to find out why if you've changed only one block since your last successful try.
- **Use "See the generated code" as a mirror.** If the behaviour doesn't match what you expect, the code tells you exactly what was executed — often the problem is a block snapped in the wrong place, not a wrong idea.
- **Read the Block legend whenever you add a block you don't know**: it's designed to be consulted at a glance, without leaving what you're doing.
- **Ask "what happens if..." questions**: what happens if I put two "after N minutes" blocks with different thresholds? What happens if the variable goes negative? Experimenting with controlled breakage is one of the best ways to learn how a program really works.
- **Open your buddy.** In BreakBuddy Studio you'll find the **🐣 Open your buddy** button: it leads to a second, lighter page that runs only the program you made — this is the one you install as an app (**⬇ Install the app** button), so the buddy stays one click away on your desktop and keeps reminding you to take breaks even outside this activity. The Studio (where you program) and the buddy (which runs it) stay linked: every time you save a change in the Studio, the buddy uses it next time.
- **When you feel ready to go beyond the available blocks**, look at the generated code as a starting point: it's real JavaScript, and the same ideas (events, variables, conditions) are what you'll find in any "text-based" programming language the day you want to try one.

---

## Going further: more things to try

When the basic blocks start to feel easy, BreakBuddy has more to explore:

- **🎨 Buddy appearance.** Pick a skin from the gallery or draw your own in pixel art: the face (eyes and mouth) stays the one decided by the blocks, so every expression also works on your drawing.
- **💾 Programs.** Save several versions of your program under a name (e.g. "water only", "pomodoro") and reload them whenever you like. **📤 Export** gives you a `.json` file to hand to a classmate or take to another computer, and **📥 Import from file** loads other people's: it's the easiest way to swap buddies.
- **Time-of-day blocks.** `current hour`, `is between... and...` and `is morning/afternoon/evening/night` snap inside an `if... then...` to make the buddy behave differently throughout the day (e.g. a different tip after 6 pm).
- **Pomodoro technique.** `this is the long break (every N breaks)` inside `when I press “I took a break”` makes a break last longer every so often; `breaks taken so far` lets you compare how many you've taken.
- **📊 Statistics.** Breaks and glasses of water day by day, with the streak of consecutive days on which you took at least one break.
- **🌐 Language.** The selector at the top switches between Italian and English: interface, blocks and legend change language (the text you write inside the blocks stays as you wrote it).

Happy coding — and enjoy your break. 🙌
