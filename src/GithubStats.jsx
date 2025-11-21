import './App.css';

export function Stats() {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Github Stats</h1>
            <div className='stat-row'>
                <img src="https://github-readme-stats.vercel.app/api?username=absolutegoaat&show_icons=true&theme=dark&hide_border=true" alt="GitHub Stats" />
                <img src="https://github-readme-streak-stats.herokuapp.com/?user=absolutegoaat&theme=dark&hide_border=true" alt="GitHub Streak" />
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=absolutegoaat&size_weight=0.5&count_weight=0.5&theme=dark&layout=donut-vertical&langs_count=15&exclude_repo=Vanguard" alt="Top Languages" />
            </div>
        </div>
    )
}