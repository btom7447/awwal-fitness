export default function SkillsRange({ skills, skillsRef, startAnimation, percentages }) {
    return (
        <div ref={skillsRef} className="space-y-27">
            {skills.map((skill, idx) => (
                <div key={idx}>
                    <div className="w-full bg-gray-300 h-[1px] relative">
                        {/* Fill Bar */}
                        <div
                            className={`${skill.color} py-2 px-5 h-10 absolute left-0 -top-5 flex items-center`}
                            style={{
                                width: startAnimation ? `${skill.percent}%` : 0,
                                transition: `width 1.5s ease ${idx * 0.3}s`,
                            }}
                        >
                        {startAnimation && percentages[idx] > 43 && (
                            <>
                                {/* Skill Name */}
                                <span
                                    className="text-xl font-light uppercase text-white opacity-0"
                                    style={{
                                        transition: `opacity 0.5s ease ${idx * 0.3 + 0.5}s`,
                                        opacity: 1,
                                    }}
                                >
                                    {skill.name}
                                </span>

                                {/* Tooltip */}
                                <span
                                    className="absolute -top-8 right-0 text-2xl font-bold opacity-0"
                                    style={{
                                        transition: `opacity 0.5s ease ${idx * 0.3 + 0.5}s`,
                                        opacity: 1,
                                    }}
                                >
                                    {percentages[idx]}%
                                </span>
                            </>
                        )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}