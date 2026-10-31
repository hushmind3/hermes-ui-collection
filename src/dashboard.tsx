import { Button, host, useValue } from '@hermes/plugin-sdk'
import { useEffect, useState } from 'react'

interface ProfileRow {
  name: string
  display_name?: string
  model?: string
  provider?: string
}

interface RoomRow {
  room_id: string
  name: string
  members?: Array<{ profile?: string }>
}

const AVATAR_COLORS = ['#5B6BFF', '#7C4DFF', '#00A86B', '#2ED3A1', '#FF6B6B', '#FF9F43', '#8E5CF7', '#00A6D6']

function shortModel(value?: string) {
  if (!value) {return '모델 미설정'}
  const tail = value.split('/').pop() || value
  return tail.replace(/:free$/, '').replace(/:.*$/, '').slice(0, 24)
}

export function Dashboard() {
  const profile = useValue(host.state.profile) || 'default'
  const [profiles, setProfiles] = useState<ProfileRow[]>([])
  const [rooms, setRooms] = useState<RoomRow[]>([])
  const [model, setModel] = useState<{ model?: string; provider?: string }>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false

    void (async () => {
      setLoading(true)
      setError('')
      try {
        const [profileResult, roomResult, modelResult] = await Promise.all([
          host.profiles.list(),
          host.request('groups.list', { profile, limit: 100 }).catch(() => ({ rooms: [] })),
          host.request('model.options', { refresh: false, explicit_only: true }).catch(() => null)
        ])
        if (cancelled) {return}
        setProfiles((profileResult?.profiles || []) as ProfileRow[])
        setRooms(roomResult?.rooms || [])
        setModel({ model: modelResult?.model, provider: modelResult?.provider })
      } catch (e) {
        if (!cancelled) {setError(e instanceof Error ? e.message : String(e))}
      } finally {
        if (!cancelled) {setLoading(false)}
      }
    })()

    return () => { cancelled = true }
  }, [profile])

  const stats = [
    { label: '봇 프로필', value: profiles.length, hint: '연결된 봇' },
    { label: '그룹 대화', value: rooms.length, hint: '활성 방' },
    { label: '현재 모델', value: shortModel(model.model), hint: model.provider || '기본값' }
  ]

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-5 p-8">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nazarick cockpit</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">대시보드</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            백엔드는 그대로, 화면만 내 취향으로. 현재 프로필: <span className="font-semibold text-foreground">{profile}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => host.navigate('/hermes-ui-collection')}>UI 테마</Button>
          <Button variant="ghost" onClick={() => host.navigate('/all-bots-model')}>모든 봇 모델</Button>
        </div>
      </header>

      {error ? <p className="rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">{error}</p> : null}

      <div className="grid gap-3 sm:grid-cols-3">
        {stats.map(stat => (
          <section key={stat.label} data-slot="card" className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <p className="text-xs font-semibold text-muted-foreground">{stat.label}</p>
            <p className="mt-2 truncate text-2xl font-extrabold tracking-tight">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.hint}</p>
          </section>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <section data-slot="card" className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold">봇</h2>
              <p className="mt-0.5 text-xs text-muted-foreground">프로필별 현재 모델</p>
            </div>
            <Button variant="ghost" onClick={() => host.navigate('/all-bots-model')}>전체 보기</Button>
          </div>
          <div className="mt-3 grid gap-1">
            {loading ? <p className="py-6 text-center text-sm text-muted-foreground">불러오는 중…</p> : null}
            {profiles.slice(0, 8).map((row, index) => (
              <div key={row.name} className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-muted/60">
                <span
                  className="grid h-8 w-8 place-items-center rounded-[10px] text-[11px] font-extrabold text-white"
                  style={{ background: AVATAR_COLORS[index % AVATAR_COLORS.length] }}
                >
                  {(row.display_name || row.name || '?').trim().charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{row.display_name || row.name}</p>
                  <p className="truncate text-[11px] text-muted-foreground">{row.name}</p>
                </div>
                <span className="ml-auto shrink-0 rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                  {shortModel(row.model)}{row.provider ? ` · ${row.provider}` : ''}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-5">
          <section data-slot="card" className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold">그룹 대화</h2>
                <p className="mt-0.5 text-xs text-muted-foreground">호스티드 룸</p>
              </div>
              <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">{rooms.length}</span>
            </div>
            <div className="mt-3 grid gap-1">
              {rooms.slice(0, 5).map(room => (
                <div key={room.room_id} className="flex items-center gap-2 rounded-xl px-2 py-2 transition-colors hover:bg-muted/60">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="min-w-0 truncate text-sm font-medium">{room.name}</span>
                  <span className="ml-auto text-[11px] text-muted-foreground">{room.members?.length || 0}명</span>
                </div>
              ))}
              {!loading && rooms.length === 0 ? <p className="py-4 text-sm text-muted-foreground">그룹이 없습니다.</p> : null}
            </div>
          </section>

          <section data-slot="card" className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <h2 className="text-sm font-bold">빠른 작업</h2>
            <div className="mt-3 grid gap-2">
              <Button className="justify-start" variant="ghost" onClick={() => host.navigate('/hermes-ui-collection')}>테마 바꾸기</Button>
              <Button className="justify-start" variant="ghost" onClick={() => host.navigate('/all-bots-model')}>모든 봇 모델 변경</Button>
              <Button className="justify-start" variant="ghost" onClick={() => host.navigate('/kanban')}>칸반 열기</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
