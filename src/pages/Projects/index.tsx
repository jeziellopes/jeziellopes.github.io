import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import * as CS from '../../components/structure'
import SimpleIcon from '../../components/structure/SimpleIcon'
import { useGithubContext } from '../../contexts/Github'
import { useSearch } from '../../hooks/useSearch'
import ga from '../../lib/ga'
import * as S from './styles'

const Projects = () => {
  const navigate = useNavigate()
  const { search, onChange } = useSearch()
  const { repos, techs } = useGithubContext()

  // handle page view
  useEffect(() => {
    const timer = setTimeout(() => ga.trackAllPages(), 100)
    return () => clearTimeout(timer)
  })

  return (
    <>
      <S.Container>
        {repos.length ? (
          <>
            <S.Header>
              <CS.Search value={search} onChange={onChange} />
              <CS.Avatar onClick={() => navigate('/')} />
            </S.Header>
            <S.Content>
              <S.Label size={32}>Stack</S.Label>
              <S.ContentGrid>
                <S.MainTechs>
                  {techs.map((tech: string, i: number) => (
                    <SimpleIcon key={i} color="#fff" icon={tech} size={24} />
                  ))}
                </S.MainTechs>
              </S.ContentGrid>
              <S.Label size={32}>Public Repositories</S.Label>
              <S.ContentGrid>
                {repos
                  .filter(
                    (repo: any) =>
                      repo.name.includes(search) ||
                      repo.description.includes(search) ||
                      repo.topics.some((topic: string) =>
                        topic.includes(search)
                      )
                  )
                  .map((repo: any, key: number) => (
                    <CS.Card
                      key={key}
                      height={150}
                      title={repo.name}
                      description={repo.description}
                      tags={repo.topics}
                      url={repo.html_url}
                      language={repo.language}
                    />
                  ))}
              </S.ContentGrid>
            </S.Content>
            {/* <S.Content>
        <S.Label size={32}>Gists</S.Label>
        <S.ContentGrid>
          {gists.map((gist: any, key) => (
            <CF.Card
              key={key}
              height={100}
              title={gist.name}
              description={gist.description}
              url={gist.html_url}
            />
          ))}
        </S.ContentGrid>
      </S.Content> */}
          </>
        ) : (
          <CS.Loading />
        )}
      </S.Container>
    </>
  )
}

export default Projects
