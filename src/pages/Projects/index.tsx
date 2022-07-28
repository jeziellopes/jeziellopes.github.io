import React from 'react'

import * as CF from '../../components/structure'
import { useGithubProfile } from '../../hooks'
import { useSearch } from '../../hooks/useSearch'
import * as S from './styles'

const Projects = () => {
  const { search, onChange } = useSearch()
  const { repos } = useGithubProfile('jeziellopes')

  return (
    <S.Container>
      <S.Header>
        <CF.Search value={search} onChange={onChange} />
        <CF.Avatar />
      </S.Header>
      <S.Content>
        <S.Label size={32}>Projects</S.Label>
        <S.ContentGrid>
          {repos
            .filter(
              (repo: any) =>
                repo.name.includes(search) ||
                repo.description.includes(search) ||
                repo.topics.some((topic: string) => topic.includes(search))
            )
            .map((repo: any, key: number) => (
              <CF.Card
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
    </S.Container>
  )
}

export default Projects
