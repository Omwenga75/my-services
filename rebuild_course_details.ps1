# Rebuild course-details.html: remove inline notes data/functions, replace with CTA card
$inputFile = Join-Path $PSScriptRoot "static\course-details.html"
$outputFile = $inputFile

$lines = Get-Content $inputFile -Encoding UTF8

# Part 1: Lines 1-234 (HEAD through Skills section)
$part1 = $lines[0..233]

# Part 2: New CTA section to replace old notes section (lines 235-256)
$ctaSection = @(
'            <!-- Course Notes CTA Section -->',
'            <section class="cd-section" id="cd-notes-cta-section" style="display:none;">',
'                <div id="cd-notes-cta" style="',
'                    display: flex;',
'                    align-items: center;',
'                    gap: 1.5rem;',
'                    background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);',
'                    border: 1px solid rgba(109, 40, 217, 0.12);',
'                    border-radius: 16px;',
'                    padding: 2rem 2.25rem;',
'                    transition: all 0.3s ease;',
'                    flex-wrap: wrap;',
'                ">',
'                    <!-- Content injected by JS -->',
'                </div>',
'            </section>'
)

# Part 3: Lines 257-567 (closing container/page, testimonials, footer, modal, toast, scripts, courseDetailsMap end)
$part3 = $lines[256..566]

# Part 4: New JS to replace old inline courseNotesMap + all notes functions (lines 568-1583)
$newJs = @(
'',
'        // Notes CTA rendering (notes page is at /course-notes?id=ID)',
'        function renderNotesCTA(courseTitle, isEnrolled) {',
'            const section = document.getElementById("cd-notes-cta-section");',
'            const container = document.getElementById("cd-notes-cta");',
'            if (!section || !container) return;',
'',
'            if (isEnrolled) {',
'                container.style.background = "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)";',
'                container.style.borderColor = "rgba(109, 40, 217, 0.15)";',
'                container.innerHTML = `',
'                    <div style="width:56px;height:56px;background:linear-gradient(135deg,#6D28D9,#4F46E5);border-radius:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 6px 18px rgba(109,40,217,0.25);">',
'                        <i class="fas fa-book-open" style="color:#fff;font-size:1.4rem;"></i>',
'                    </div>',
'                    <div style="flex:1;min-width:200px;">',
'                        <h3 style="font-size:1.2rem;font-weight:800;color:#1e1b4b;margin:0 0 0.35rem;">Course Notes &amp; Study Guide</h3>',
'                        <p style="color:#475569;font-size:0.92rem;line-height:1.5;margin:0;">Access comprehensive study modules, code cheat sheets, revision notes, and interactive quizzes for <strong>${courseTitle}</strong>.</p>',
'                    </div>',
'                    <a href="/course-notes?id=${currentCourseId}" style="',
'                        display:inline-flex;align-items:center;gap:0.5rem;',
'                        background:linear-gradient(135deg,#6D28D9,#4F46E5);color:#fff;',
'                        padding:0.85rem 1.8rem;border-radius:12px;font-weight:700;font-size:0.95rem;',
'                        text-decoration:none;white-space:nowrap;',
'                        box-shadow:0 6px 20px rgba(109,40,217,0.3);',
'                        transition:all 0.25s ease;',
'                    " onmouseover="this.style.transform=''translateY(-2px)'';this.style.boxShadow=''0 10px 28px rgba(109,40,217,0.4)''" onmouseout="this.style.transform='''';this.style.boxShadow=''0 6px 20px rgba(109,40,217,0.3)''">',
'                        <i class="fas fa-arrow-right"></i> Open Notes',
'                    </a>',
'                `;',
'            } else {',
'                container.style.background = "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)";',
'                container.style.borderColor = "#e2e8f0";',
'                container.innerHTML = `',
'                    <div style="width:56px;height:56px;background:#f1f5f9;border:2px solid #e2e8f0;border-radius:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">',
'                        <i class="fas fa-lock" style="color:#94a3b8;font-size:1.3rem;"></i>',
'                    </div>',
'                    <div style="flex:1;min-width:200px;">',
'                        <h3 style="font-size:1.2rem;font-weight:800;color:#334155;margin:0 0 0.35rem;">Course Notes Locked</h3>',
'                        <p style="color:#64748b;font-size:0.92rem;line-height:1.5;margin:0;">Enroll in <strong>${courseTitle}</strong> to unlock detailed study guides, code snippets, and practice quizzes.</p>',
'                    </div>',
'                    <button onclick="scrollToEnroll()" style="',
'                        display:inline-flex;align-items:center;gap:0.5rem;',
'                        background:#e2e8f0;color:#475569;border:none;cursor:pointer;',
'                        padding:0.85rem 1.8rem;border-radius:12px;font-weight:700;font-size:0.95rem;',
'                        white-space:nowrap;',
'                        transition:all 0.25s ease;',
'                    " onmouseover="this.style.background=''#cbd5e1''" onmouseout="this.style.background=''#e2e8f0''">',
'                        <i class="fas fa-lock" style="font-size:0.85rem;"></i> Enroll to Unlock',
'                    </button>',
'                `;',
'            }',
'            section.style.display = "";',
'        }',
'',
'        function scrollToEnroll() {',
'            const enrollBtn = document.getElementById("cd-enroll-btn");',
'            if (enrollBtn) {',
'                enrollBtn.scrollIntoView({ behavior: "smooth", block: "center" });',
'                enrollBtn.classList.add("flash-attention");',
'                setTimeout(() => {',
'                    enrollBtn.classList.remove("flash-attention");',
'                }, 1800);',
'            }',
'        }',
''
)

# Part 5: Lines 1585-1880 (isAdmin, loadCourseDetails, enrollCourse, etc.)
# But we need to modify lines 1735-1740 and 1779-1781
$part5_raw = $lines[1584..1879]

# Convert to ArrayList for modification
$part5 = [System.Collections.ArrayList]@($part5_raw)

# Find and replace the renderCourseNotes/renderLockedCourseNotes block in loadCourseDetails
# Lines 1735-1740 become part5 index [1735-1585]=150 to [1740-1585]=155
# Target text: "// Render notes if enrolled/admin, or locked notes if not"
for ($i = 0; $i -lt $part5.Count; $i++) {
    if ($part5[$i] -match "Render notes if enrolled/admin") {
        # Replace lines i through i+5
        $part5[$i] = '                    // Show notes CTA (full notes on separate page)'
        $part5[$i+1] = '                    renderNotesCTA(course.title, course.is_enrolled || isAdmin);'
        # Remove the remaining 4 lines (else block)
        $part5.RemoveAt($i+2)
        $part5.RemoveAt($i+2)
        $part5.RemoveAt($i+2)
        $part5.RemoveAt($i+2)
        break
    }
}

# Find and replace the renderCourseNotes call in enrollCourse
# Target text: "// Dynamically unlock and render the course notes immediately"
for ($i = 0; $i -lt $part5.Count; $i++) {
    if ($part5[$i] -match "Dynamically unlock and render the course notes") {
        $part5[$i] = '                    // Update notes CTA to unlocked state'
        $part5[$i+1] = '                    const courseTitle = document.getElementById("cd-title").textContent;'
        $part5[$i+2] = '                    renderNotesCTA(courseTitle, true);'
        break
    }
}

# Combine all parts
$result = @()
$result += $part1
$result += $ctaSection
$result += $part3
$result += $newJs
$result += $part5.ToArray()

# Write output
$result | Set-Content $outputFile -Encoding UTF8

Write-Host "Done. New file has $($result.Count) lines (was $($lines.Count) lines)."
