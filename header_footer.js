// ১. লেআউট ইনজেক্ট করার মেইন ফাংশন
async function injectLayout() {
    try {
        // হেডার লোড (Path /header.html নিশ্চিত করুন)
        const headRes = await fetch('/header.html');
        const headData = await headRes.text();
        document.body.insertAdjacentHTML('afterbegin', headData);

        // ফুটার লোড (Path /footer.html নিশ্চিত করুন)
        const footRes = await fetch('/footer.html');
        const footData = await footRes.text();
        document.body.insertAdjacentHTML('beforeend', footData);

        // হেডার-ফুটার লোড হওয়ার পর মেনু এবং লজিক রান করা
        initializeHTICore();
    } catch (err) {
        console.error("Layout failed to load:", err);
    }
}

// ২. আপনার সম্পূর্ণ মেনু ডেটাবেস
const fileLinks = {
    "Short Course Admission" : "/html/shourts_course_admission01.html",
    "Private Admission" : "/html/private_admission02.html",
    "Fee Payment" : "/html/fee_payment03.html",
    "Admission Guidlines" : "/html/admission_guidlines04.html",
    "Number System and Complements" : "/html/number_system_conversion05.html",
    "Basic Calculator" : "/html/basic_calculator06.html",
    "Lenght Conversion" : "/html/lenght_calculator07.html",
    "Weight Conversion" : "/html/weight_coversion08.html",
    "Time Counter" : "/html/time_counter09.html",
    "Age Calculator" : "/html/age_calculator10.html",
    "Shourt Course" : "/html/sourts_course11.html",
    "Long Course" : "/html/long_course12.html",
    "Dircting Manager" : "/html/directing_manager013.html",
    "Trade Instructor" : "/html/trade_instructor014.html",
    "Teacher" : "/html/teacher015.html",
    "Assistent Teacher" : "/html/assistent016.html",
    "Internt Teacher" : "/html/internt_teacher017.html",
    "Course Final Result" : "/html/course_final_result018.html", 
    "Board Result" : "/html/board_result019.html", 
    "Test Exam Result" : "/html/test_exam_result020.html",
    "Admission Result" : "/html/admission_result021.html",
    "Scholarship Result" : "/html/scholarship_result022.html",
    "Short Course Book" : "/html/short_course_book023.html",
    "Long Course Book" : "/html/long_course_book024.html",
    "Referance Book" : "/html/referance_book025.html",
    "HTI Institute Writing Book" : "/html/hti_institute_writing_book026.html",
    "Academic Gallery" : "/html/academic_gallery027.html",
    "Cultural Gallery" : "/html/cultural_gallery028.html",
    "Event Gallery" : "/html/event_gallery029.html",
    "Student Project Gallery" : "/html/student_project_gallery030.html",
    "Software Invention" : "/html/software_invention031.html",
    "Resarch Paper" : "/html/resarch_paper032.html",
    "Prototype Models" : "/html/prototype_models033.html",
    "Office Location" : "/html/office_location034.html",
    "Complaint" : "/html/complaint035.html",
    "Social Media" : "/html/social_media036.html",
    "Technology Blogs" : "/html/technology_blogs037.html",
    "Education blogs" : "/html/education_blogs038.html",
    "Career Guidance Blogs" : "/html/career_guidance_blogs039.html",
    "Student Experience Blogs" : "/html/student_experience_blogs040.html",
    "Upcoming Events" : "/html/upcoming_events041.html",
    "Ongoing Events" : "/html/ongoing_events042.html",
    "Past Events" : "/html/past_events043.html",
    "Software Products" : "/html/software_products044.html",
    "Hardware Products" : "/html/hardware_products045.html",
    "Educational Meterials" : "/html/educational_meterials046.html",
    "Merchandise" : "/html/merchandise047.html",
    "Typing Games" : "/html/typing_games048.html",
    "Educational Games" : "/html/educational_games049.html",
    "Puzzle Games" : "/html/puzzle_games050.html",
    "Programing Base Games" : "/html/programing_base_games051.html",
    "Entertainment Games" : "/html/entertainment_games052.html",
    "Student Writing Report" : "/html/student_writng_report53.html"
};

const menuData = [
    { name: "Home", link: "/index.html" },
    { name: "Admission", sub: ["Short Course Admission", "Private Admission", "Fee Payment", "Admission Guidlines"] },
    { name: "Calculation", sub: ["Number System and Complements", "Basic Calculator", "Lenght Conversion", "Weight Conversion", "Time Counter", "Age Calculator"] },
    { name: "Notice", link: "/html/notice10.html" },
    { name: "Course", sub: ["Shourt Course", "Long Course"] },
    { name: "Teachers", sub: ["Dircting Manager", "Trade Instructor", "Teacher", "Assistent Teacher", "Internt Teacher"] },
    { name: "Result", sub: ["Course Final Result", "Board Result", "Test Exam Result", "Admission Result", "Scholarship Result"] },
    { name: "Library", sub: ["Short Course Book", "Long Course Book", "Referance Book", "HTI Institute Writing Book"] },
    { name: "Gallery", sub: ["Academic Gallery", "Cultural Gallery", "Event Gallery", "Student Project Gallery"] },
    { name: "Invention", sub: ["Software Invention", "Resarch Paper", "Prototype Models"] },
    { name: "Contact", sub: ["Office Location", "Complaint", "Social Media"] },
    { name: "Blogs", sub: ["Technology Blogs", "Education blogs", "Career Guidance Blogs", "Student Experience Blogs", "Student Writing Report"] },
    { name: "Event", sub: ["Upcoming Events", "Ongoing Events", "Past Events"] },
    { name: "Product", sub: ["Software Products", "Hardware Products", "Educational Meterials", "Merchandise"] },
    { name: "Games", sub: ["Typing Games", "Educational Games", "Puzzle Games", "Programing Base Games", "Entertainment Games"] },
    { name: "Guidlines", link: "/html/guidlines53.html"}
];

// ৩. সব ফাংশন একত্রে চালু করা
function initializeHTICore() {
    const navList = document.getElementById('nav-list');
    const navbar = document.getElementById('navbar');
    
    // মেনু তৈরি
    menuData.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        if (item.sub) {
            let dHTML = `<ul class="dropdown">`;
            item.sub.forEach(s => {
                let fileName = fileLinks[s] || "/index.html"; 
                dHTML += `<li><a href="${fileName}">${s}</a></li>`;
            });
            dHTML += `</ul>`;
            li.innerHTML = `<a class="nav-link">${item.name}</a>${dHTML}`;
        } else {
            li.innerHTML = `<a href="${item.link}" class="nav-link">${item.name}</a>`;
        }
        navList.appendChild(li);
    });

    // ড্রপডাউন পজিশন লজিক
    document.querySelectorAll('.nav-item').forEach(li => {
        const link = li.querySelector('.nav-link');
        const drop = li.querySelector('.dropdown');
        if(drop) {
            li.addEventListener('mouseenter', () => {
                const rect = link.getBoundingClientRect();
                drop.style.display = 'block';
                if (rect.left + drop.offsetWidth > window.innerWidth) {
                    drop.style.left = 'auto';
                    drop.style.right = (window.innerWidth - rect.right) + 'px';
                } else {
                    drop.style.right = 'auto';
                    drop.style.left = rect.left + 'px';
                }
                drop.style.top = rect.bottom + 'px';
            });
            li.addEventListener('mouseleave', () => drop.style.display = 'none');
        }
    });

    // সব ন্যাভ লিঙ্ক সিলেক্ট করা
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // প্রথমে সবার থেকে 'active' ক্লাসটি সরিয়ে ফেলা
        navLinks.forEach(item => item.classList.remove('active'));
        
        // এরপর শুধুমাত্র যেটিতে ক্লিক করা হয়েছে সেটিতে 'active' ক্লাস যোগ করা
        this.classList.add('active');
    });
});



    // মাউস হুইল স্ক্রোলিং
    navbar.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            navbar.scrollLeft += e.deltaY;
        }
    });

    // স্মার্ট সার্চ লজিক
    const searchInput = document.getElementById('main-search');
    const resultsBox = document.getElementById('search-results');
    let searchDb = [];
    menuData.forEach(m => m.sub ? m.sub.forEach(s => searchDb.push({t:s, l:fileLinks[s]||'/index.html'})) : searchDb.push({t:m.name, l:m.link}));

    searchInput.addEventListener('input', function() {
        const val = this.value.toLowerCase();
        resultsBox.innerHTML = '';
        if(val) {
            const matches = searchDb.filter(d => d.t.toLowerCase().includes(val));
            if(matches.length) {
                resultsBox.style.display = 'block';
                matches.forEach(m => {
                    resultsBox.innerHTML += `<a href="${m.l}" class="search-item">${m.t}</a>`;
                });
            } else { resultsBox.style.display = 'none'; }
        } else { resultsBox.style.display = 'none'; }
    });
}

// রান করুন
injectLayout();