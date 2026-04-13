---
title: "Notes from reading The Pragmatic Programmer"
date: "2026-04-14"
tags: ["Development", "Books", "Programming"]
---

I picked up The Pragmatic Programmer expecting another technical book full of obscure terms and convoluted examples. I was quite wrong. Dave Thomas and Andy Hunt write like people who still remember what it's like to not know things, and the result is a book that's less about specific technologies and more about how to think as a developer.

I made a lot of highlights, and these are the ideas that stuck.

## Broken windows

There's a theory from criminology: a building with one broken window will eventually have all its windows broken. Nobody cares about a building that's already damaged, so damage accumulates.

Codebases work the same way. One ugly hack, left in place, signals that hacking is acceptable here. The next developer sees it and thinks "all the rest of this code is like this, I'll just follow along." And they're not wrong to think that the codebase showed them these examples.

The flip side is also true. When you work on something cleanly written and well-structured, you take extra care not to mess it up. The standard is visible, and you rise to meet it.

The practical takeaway is simple: fix the broken windows. If you don't have time for a proper fix, note them down, comment out the offending code, add a "Not Implemented" placeholder, leave a TODO with context. Anything is better than letting the rot signal that nobody cares. Because once that signal takes hold, entropy wins fast. Most software disasters don't start with a big bang, they start a day at a time.

## Tracer bullets vs prototypes

The book makes a distinction here that I think most developers blur.

A prototype exists to answer a question. You build it quick, learn something, throw it away. You might prototype a UI layout in Figma, test a performance hypothesis with a throwaway script, or sketch workflow on Post-it notes. The point is exploration, and the code is disposable.

Tracer bullets are different. The term comes from ammunition that lets shooters see where their rounds are going. In software, you pick a thin slice of functionality, something that touches every layer of your architecture and you build it end-to-end. Real code. Real error handling. Real structure. You just don't build all of it yet.

The value is that you get a working skeleton. Users see something tangible early. Developers have an architectural blueprint to hang code on. And you find integration problems immediately, not three months in when five teams try to snap their pieces together.

Prototypes answer "can this work?"

Tracer bullets answer "how does this all hang together?"

Both are useful, but they serve different purposes, and confusing them leads to either throwing away code you should have kept, or shipping code you should have thrown away.

## Design philosophy: ETC, DRY, orthogonality

The book argues that most design principles are special cases of one idea: Easier to Change. ETC. That's the filter. When you're choosing between two approaches, pick the one that makes the system easier to change later.

DRY (Don't Repeat Yourself) fits under this umbrella, but the book's definition is sharper than most people use it. DRY isn't about avoiding duplicated code, it's about avoiding duplicated knowledge. Two functions can have identical code but represent different things, and that's fine. What's not fine is expressing the same business rule in two places, because when that rule changes you'll update one and forget the other.

Then there's orthogonality. In an orthogonal system, changing one component doesn't force changes in others. You can swap the database without touching the UI. You can redesign the UI without rewriting business logic. The test is straightforward: if you dramatically change the requirements behind one function, how many modules break? In a well-designed system, the answer should be one.

There's a practical diagnostic here too. If your unit tests require importing half the codebase just to run, your modules aren't decoupled. If every bug fix touches a dozen files, your system isn't orthogonal. These are signals worth paying attention to.

The book suggests spending a week deliberately asking yourself: "did the thing I just did make the overall system easier or harder to change?" Do it when you save a file, write a test, fix a bug.

## Knowledge is an expiring asset

Your skills and experience are your most important professional assets. They're also depreciating. What you know today becomes less relevant as the industry goes forward.

The book frames this as a portfolio problem. Same principles apply: invest regularly, diversify, balance risk. Learn an emerging technology before it gets popular, it's risky, like picking an undervalued stock, but the payoff can be enormous. The people who learned Java when it was unknown did very well when it became an industry standard.

The specific advice is blunt. Learn a new language every year. Read a technical book each month. Read nontechnical books too. It doesn't matter if you never use a particular technology on a project or put it on your resume. The process of learning expands your thinking, and bringing ideas from one domain into your current work is where the real value is.

There's a line in the book about isolation being deadly to your career. I think about that one a lot. It's easy to get comfortable with your stack and stop looking around. But the developers who stay effective over decades are the ones who keep learning and applying what they pick up.

## Our job is to help people understand what they want

Requirements don't exist in some clean, discoverable form. They're buried under assumptions and misconceptions. Sometimes they don't exist at all until someone forces the conversation.

That's the developer's job. Not just implementing what's asked for, but being the person who asks "what happens at the edges?" The book puts it well:

> When given something that seems simple, we annoy people by looking for edge cases and asking about them. That's not a bug in how developers think. It's probably our most valuable attribute.

This is also why short iterations matter. You build something small, put it in front of the client, and find out fast if you're headed in the wrong direction. The amount of time lost stays small. And what the client needs a year from now may be completely different from what they think they need today, so locking in requirements early is often a waste.

The book even suggests sitting in on a user's actual work for a week. You'd be surprised how much you learn about how the system will really be used, and how different it is from the spec.

## Stone soup

Here's a technique for getting things built when you can't get buy-in upfront.

Build something small. Make it work. Show people. Let them react. Then say "of course, it would be better if we added…" and pretend it's not important. Wait for them to start asking for the functionality you originally wanted.

People find it easier to join an ongoing success than to approve something that only exists as a proposal. Show them a glimpse of the future and they'll rally around it.

This is startup thinking, but it works inside companies too. The developers I've seen get things done in organizations that resist change are almost always using some version of this pattern, shipping small, showing value, expanding scope once there's momentum.

## Communication is not talking

We've all been in meetings where a developer glazes over the eyes of everyone in the room with a monologue about some arcane technology. That's not communicating. That's just talking.

The book's advice is unglamorous but important. Think about your audience. Are they experts? Do they need hand-holding or just a quick summary? Adjust. Ask "is this a good time to talk about this?" before launching in. And above all, listen. If you don't listen to them, they won't listen to you.

There's a related point about presentation. You can spend hours in the kitchen and ruin it all with poor plating. Same with documentation, proposals, emails. There's no excuse for producing sloppy-looking work when the tools to produce clean output are free and everywhere.

This connects to team dynamics too. The worst teams from the outside are the ones that appear disorganized, meetings with no structure, emails and documents that all look different, inconsistent terminology. The good teams speak with one voice. They might even have a sense of humor.

## Sign your work

The book ends with a challenge: take pride in what you build. Your name on a piece of code should mean something, that it's solid, well written, tested, documented. A professional job, written by a professional.

This isn't about ego. It's about responsibility. When something breaks, don't blame the vendor, the language, management, or your coworkers. If there was a risk the vendor wouldn't deliver, you should have had a backup plan. If your storage melted and took your source code with it because you didn't have backups, that's on you.

The book suggests a useful exercise before you go explain to someone why something went wrong: talk to the rubber duck on your monitor first. Does your excuse sound reasonable, or stupid? If it sounds stupid to a rubber duck, it'll sound worse to your boss. Instead of excuses, provide options. Don't say it can't be done. Explain what can be done.

There's a line near the end about developers being incredibly privileged. Our skills are in demand, we can work from anywhere, we're paid well. The book's challenge is to not waste that. Don't get comfortable and wait for things to happen. Be proactive, invest in your skills, raise your standards, seek out work that makes you better. This industry gives you options that most careers don't. Use them.
