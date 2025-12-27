import React, { useState, useRef } from 'react';
import { Mail, Linkedin, Instagram, Award, Crown, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// --- TEAM DATA ---
const teamData = {
    faculties: [
        { name: "Dr. A. B. C. Rao", title: "Faculty Head", img: "https://i.pravatar.cc/150?img=68", socials: { linkedin: "#", mail: "#" } },
        { name: "Dr. D. E. F. Singh", title: "Faculty Coordinator", img: "https://i.pravatar.cc/150?img=69", socials: { linkedin: "#", mail: "#" } },
    ],
    overallCoordinators: [
        { name: "Abhishek Kumar Jha", title: "Overall Coordinator", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850563/Abhishek_Jha_oc_sppo3y.png", socials: { linkedin: "#", instagram: "#" } },
        { name: "Abhishek Yadav", title: "Overall Coordinator", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850012/Abhishek_Yadav_PR_Domain_dypfsh.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Anshika Bhardwaj", title: "Overall Coordinator", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850016/Anshika_Bhardwaj_OC_kikhzl.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Ayush Bhardwaj", title: "Overall Coordinator", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850022/Ayush_Bhardwaj__OC_etgluy.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Ritik Pathak", title: "Overall Coordinator", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850045/Ritik_Pathak_OC_gkzjms.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Shashank Sharma", title: "Overall Coordinator", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850061/Shashank_Sharma__OC_nob4lj.jpg", socials: { linkedin: "#", instagram: "#" } },
    ],
    headCoordinators: [
        { name: "Pragati Mishra", domain: "Public Relations & Marketing", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850034/Pragati_Mishra_Pr_domain_m5g3hd.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Prateek Singh", domain: "Public Relations & Marketing", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850037/PRATEEK_SINGH_zyunf4.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Abhishek Yadav", domain: "Public Relations & Marketing", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850012/Abhishek_Yadav_PR_Domain_dypfsh.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Kanuri Varshini", domain: "Event Management", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850056/Varshini_EM_pcxn2x.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Shivam Ranjan", domain: "Event Management", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850050/Shivam_Ranjan_Event_Management_wo6tlq.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Vikas Patel", domain: "Event Management", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850058/Vikas_Patel___Event_Management_tsg2ns.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Yoshita Sedani", domain: "Event Management", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850059/Yoshita_EM_hyiabw.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Priyanshu Kumar ", domain: "Sponsorship", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850042/Priyanshu_Kumar_Sponsorship_rjtf9p.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Shristi Sahu", domain: "Sponsorship", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850059/SHRISTI_SAHU_SPONSORSHIP_jegzof.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Aditya Anand ", domain: "Startup Founder", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850016/Aditya_Anand_Startup_founder_ipoev1.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Harsh Kumar Sinha", domain: "Startup Founder", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850026/Harsh_Sinha__Startup_Founder_yoxirh.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Kanishka Kirti ", domain: "Documentation", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850028/Kanishka_Doc_dtcphv.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Lakshya Ratre", domain: "Content Creation", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850034/LakshyaRatre_Editing_bq28t1.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Somya Nayak ", domain: "Content Creation", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850073/SomyaNayak_ContentCreation_biikev.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Kanha Chandravanshi ", domain: "Design", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850029/Kanha_Chandravanshi_Design_waz8a1.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Ritesh Patel", domain: "Design", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850055/Ritesh_Patel_Design_vkfofl.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Arnav Sharma", domain: "Technical", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850018/Arnav_Sharma_Tech_HC_kvf7sw.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Ayush Shukla", domain: "Technical", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850020/Ayush_Shukla__Tech_xmymam.jpg", socials: { linkedin: "#", instagram: "#" } },
        { name: "Abhishek Chauhan", domain: "Technical", img: "https://res.cloudinary.com/daoth3ia9/image/upload/v1766850009/Abhishek_Chauhan_Tech_jqm9dz.jpg", socials: { linkedin: "#", instagram: "#" } },
    ],
    managers: [
        { name: "Vivek M.", domain: "Tech" }, { name: "Riya M.", domain: "Tech" }, { name: "Kiran M.", domain: "Tech" }, { name: "Siddharth M.", domain: "Tech" }, { name: "Aarav M.", domain: "Tech" }, { name: "Zoya M.", domain: "Tech" },
        { name: "Anjali M.", domain: "Spons" }, { name: "Ishaan M.", domain: "Spons" }, { name: "Pooja M.", domain: "Spons" }, { name: "Rohit M.", domain: "Spons" }, { name: "Chirag M.", domain: "Spons" }, { name: "Divya M.", domain: "Spons" },
        { name: "Chitra M.", domain: "PR" }, { name: "Harshita M.", domain: "PR" }, { name: "Gaurav M.", domain: "PR" }, { name: "Nisha M.", domain: "PR" }, { name: "Om M.", domain: "PR" },
        { name: "Deepak M.", domain: "Video Editing" }, { name: "Lata M.", domain: "Video Editing" }, { name: "Mohan M.", domain: "Video Editing" }, { name: "Parul M.", domain: "Video Editing" }, { name: "Quentin M.", domain: "Video Editing" },
        { name: "Ekta M.", domain: "Design" }, { name: "Bhuvan M.", domain: "Design" }, { name: "Tina M.", domain: "Design" }, { name: "Rohan M.", domain: "Design" }, { name: "Simran M.", domain: "Design" },
        { name: "Farhan M.", domain: "EM" }, { name: "Kavya M.", domain: "EM" }, { name: "Rajesh M.", domain: "EM" }, { name: "Sunita M.", domain: "EM" },
        { name: "Jay M.", domain: "Startup Founder" }, { name: "Meena M.", domain: "Startup Founder" }, { name: "Neil M.", domain: "Startup Founder" },
    ],
    executives: [
        { name: "Jahnvi E.", domain: "Tech" }, { name: "Rakesh E.", domain: "Tech" }, { name: "Sonia E.", domain: "Tech" }, { name: "Tarun E.", domain: "Tech" }, { name: "Urmila E.", domain: "Tech" }, { name: "Vikrant E.", domain: "Tech" },
        { name: "Kunal E.", domain: "Design" }, { name: "Parul E.", domain: "Design" }, { name: "Waseem E.", domain: "Design" }, { name: "Xena E.", domain: "Design" }, { name: "Yash E.", domain: "Design" }, { name: "Zubair E.", domain: "Design" },
        { name: "Lata E.", domain: "PR" }, { name: "Alok E.", domain: "PR" }, { name: "Bhavana E.", domain: "PR" }, { name: "Chetan E.", domain: "PR" }, { name: "Deepa E.", domain: "PR" },
        { name: "Mohan E.", domain: "Video Editing" }, { name: "Eesha E.", domain: "Video Editing" }, { name: "Faisal E.", domain: "Video Editing" }, { name: "Geeta E.", domain: "Video Editing" }, { name: "Himesh E.", domain: "Video Editing" },
        { name: "Nisha E.", domain: "Spons" }, { name: "Imran E.", domain: "Spons" }, { name: "Jigisha E.", domain: "Spons" }, { name: "Kartik E.", domain: "Spons" }, { name: "Laxmi E.", domain: "Spons" },
        { name: "Om E.", domain: "EM" }, { name: "Manish E.", domain: "EM" }, { name: "Neelam E.", domain: "EM" }, { name: "Piyush E.", domain: "EM" },
        { name: "Rahul E.", domain: "Startup Founder" }, { name: "Shweta E.", domain: "Startup Founder" }, { name: "Uday E.", domain: "Startup Founder" },
    ],
};

const DOMAINS = ['Tech', 'Spons', 'PR', 'Video Editing', 'Design', 'Startup Founder', 'EM'];

// --- UPDATED TEAM CARD COMPONENT (FIXED IMAGE POSITIONING) ---
const TeamCard = ({ member, tier }) => {
    const ref = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const onMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientY - rect.top - rect.height / 2) / 30;
        const y = (e.clientX - rect.left - rect.width / 2) / 30;
        setTilt({ x, y });
    };

    const onLeave = () => setTilt({ x: 0, y: 0 });

    const badge =
        tier === "faculty"
            ? { icon: Award, text: "Faculty" }
            : tier === "oc"
            ? { icon: Crown, text: "OC" }
            : { icon: Users, text: "Head" };

    const BadgeIcon = badge.icon;

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            animate={{
                rotateX: -tilt.x,
                rotateY: tilt.y,
                scale: tilt.x || tilt.y ? 1.04 : 1,
            }}
            style={{ perspective: 1000 }}
            className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl w-full max-w-[320px] mx-auto"
        >
            <motion.div
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.6, 0.75, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-ecell-mine/20 via-transparent to-purple-500/10"
            />

            <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-ecell-mine text-black text-xs font-semibold flex items-center gap-1 shadow-lg">
                <BadgeIcon className="w-3 h-3" />
                {badge.text}
            </div>

            {/* FIXED IMAGE BOX: Increased height and object-top for face visibility */}
            <div className="relative h-95 overflow-hidden bg-gray-800">
                <motion.img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top" // Aligns to top to show faces
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            <div className="relative p-6 text-center z-10">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-ecell-mine text-sm font-medium tracking-wide">
                    {member.title || member.domain}
                </p>

                {member.socials && (
                    <div className="flex justify-center gap-5 mt-4 text-gray-400">
                        {member.socials.linkedin && (
                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-5 h-5 hover:text-ecell-mine cursor-pointer transition" />
                            </a>
                        )}
                        {member.socials.instagram && (
                            <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-5 h-5 hover:text-ecell-mine cursor-pointer transition" />
                            </a>
                        )}
                        {member.socials.mail && (
                            <a href={`mailto:${member.socials.mail}`}>
                                <Mail className="w-5 h-5 hover:text-ecell-mine cursor-pointer transition" />
                            </a>
                        )}
                    </div>
                )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ecell-mine to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
        </motion.div>
    );
};

// --- SUB-COMPONENTS ---
const SectionHeader = ({ title }) => (
    <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true, amount: 0.5 }}
    >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mt-20 mb-6 tracking-tight">
            {title}
        </h2>
        <div className="w-24 h-1 bg-ecell-primary mx-auto mb-12 rounded-full"></div>
    </motion.div>
);

const DomainTab = ({ domain, currentDomain, setDomain }) => (
    <button
        onClick={() => setDomain(domain)}
        className={`px-5 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 whitespace-nowrap border ${
            currentDomain === domain
                ? 'bg-ecell-vibrant-magenta text-white border-ecell-vibrant-magenta shadow-lg shadow-ecell-vibrant-magenta/30'
                : 'bg-gray-800/70 text-gray-400 border-transparent hover:bg-gray-700/70 hover:text-white'
        }`}
    >
        {domain}
    </button>
);

// --- MAIN TEAMS COMPONENT ---
const Teams = () => {
    const [selectedManagerDomain, setSelectedManagerDomain] = useState('Tech');
    const [selectedExecutiveDomain, setSelectedExecutiveDomain] = useState('Tech');

    const filteredManagers = teamData.managers.filter(m => m.domain === selectedManagerDomain);
    const filteredExecutives = teamData.executives.filter(e => e.domain === selectedExecutiveDomain);

    const listContainerVariants = {
        visible: { transition: { staggerChildren: 0.08 } },
    };

    return (
        <div className="min-h-screen bg-ecell-bg relative overflow-hidden pb-20">
            {/* Ambient Background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-40 left-10 h-80 w-80 bg-ecell-primary/30 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-40 right-0 h-96 w-96 bg-ecell-secondary/20 rounded-full blur-[110px]" />
                <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 bg-ecell-accent/15 rounded-full blur-3xl" />
            </div>

            <div className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    viewport={{ once: true }}
                    className="text-6xl font-black text-white text-center mb-20 tracking-tighter"
                >
                    MEET THE TEAM
                </motion.h1>

                {/* FACULTY */}
                <SectionHeader title="Faculty Advisors" />
                <div className="flex flex-wrap justify-center gap-10">
                    {teamData.faculties.map((member, i) => (
                        <TeamCard key={i} member={member} tier="faculty" />
                    ))}
                </div>

                {/* OVERALL COORDINATORS */}
                <SectionHeader title="Overall Coordinators" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamData.overallCoordinators.map((member, i) => (
                        <TeamCard key={i} member={member} tier="oc" />
                    ))}
                </div>

                {/* HEAD COORDINATORS */}
                <SectionHeader title="Head Coordinators" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamData.headCoordinators.map((member, i) => (
                        <TeamCard key={i} member={member} tier="head" />
                    ))}
                </div>

                {/* MANAGERS */}
                <SectionHeader title="Managers" />
                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {DOMAINS.map(d => (
                        <DomainTab key={d} domain={d} currentDomain={selectedManagerDomain} setDomain={setSelectedManagerDomain} />
                    ))}
                </div>
                <motion.div 
                    key={`mgr-${selectedManagerDomain}`}
                    variants={listContainerVariants}
                    initial="hidden" animate="visible"
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                    {filteredManagers.map(m => (
                        <motion.div 
                            key={m.name}
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            className="p-5 bg-gray-900/60 border border-white/5 rounded-xl text-center hover:border-ecell-mine/50 transition duration-300"
                        >
                            <p className="font-bold text-white">{m.name}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{m.domain}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* EXECUTIVES */}
                <SectionHeader title="Executives" />
                <div className="flex justify-center flex-wrap gap-3 mb-12">
                    {DOMAINS.map(d => (
                        <DomainTab key={d} domain={d} currentDomain={selectedExecutiveDomain} setDomain={setSelectedExecutiveDomain} />
                    ))}
                </div>
                <motion.div 
                    key={`exec-${selectedExecutiveDomain}`}
                    variants={listContainerVariants}
                    initial="hidden" animate="visible"
                    className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {filteredExecutives.map(e => (
                        <motion.li 
                            key={e.name}
                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                            className="flex items-center text-gray-300 hover:text-white transition-colors"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-ecell-accent mr-3 shadow-[0_0_8px_var(--color-ecell-accent)]" />
                            <span className="font-medium">{e.name}</span>
                        </motion.li>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Teams;