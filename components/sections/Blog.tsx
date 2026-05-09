import { ArrowRight, Clock } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/constants'

export default function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="kicker">Insurance insights</div>
            <h2 className="h1 mt-3">Straight Talk About <span className="swoosh swoosh-green">Coverage.</span></h2>
          </div>
          <a href="/blog" className="btn-outline self-start sm:self-auto flex-shrink-0">
            View all articles <ArrowRight size={14} strokeWidth={2.4} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map(post => (
            <article key={post.slug} className="card card-lg hover-lift flex flex-col group cursor-pointer">
              {/* Visual placeholder */}
              <div className="h-44 rounded-t-[22px] relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg,#eaf5ec 0%,#d6ecdb 100%)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-green/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-green/40" />
                  </div>
                </div>
                {post.badge && (
                  <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full
                    ${post.badge === 'New' ? 'bg-orange text-white' : 'bg-ink text-white'}`}>
                    {post.badge}
                  </span>
                )}
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-green-700 mb-2">{post.category}</div>
                <h3 className="font-serif font-semibold text-lg leading-snug text-ink group-hover:text-green-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-ink-3 text-sm leading-relaxed mt-2 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-line">
                  <div className="flex items-center gap-1.5 text-ink-4 text-xs">
                    <Clock size={12} aria-hidden /> {post.readTime}
                  </div>
                  <span className="text-xs text-ink-4">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
