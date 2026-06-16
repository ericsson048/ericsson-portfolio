"use client"
import { useState, useEffect } from "react"
import CountUp from "react-countup"

function Stats() {
    const [stats, setStats] = useState([
        { num: 12, text: "Years of experience" },
        { num: 26, text: "Projects completed" },
        { num: 8, text: "Technologies mastered" },
        { num: 500, text: "Code commits" }
    ])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Récupérer les stats depuis l'API GitHub
        fetch('/api/github/stats')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch stats')
                return res.json()
            })
            .then(data => {
                if (data.success && data.stats) {
                    setStats([
                        {
                            num: data.stats.experience,
                            text: "Years of experience"
                        },
                        {
                            num: data.stats.projects,
                            text: "Projects completed"
                        },
                        {
                            num: data.stats.technologies,
                            text: "Technologies mastered"
                        },
                        {
                            num: data.stats.commits > 0 ? data.stats.commits : 500,
                            text: "Code commits"
                        }
                    ])
                }
                setLoading(false)
            })
            .catch(err => {
                console.error('Error fetching GitHub stats:', err)
                setError(err.message)
                setLoading(false)
                // Garder les stats par défaut en cas d'erreur
            })
    }, [])

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                {error && (
                    <div className="text-center mb-4 text-yellow-500 text-sm">
                        Using cached stats
                    </div>
                )}
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((itm, idx) => {
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center" key={idx}>
                                <CountUp 
                                    end={itm.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p className={`${itm.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                                    {itm.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Stats
