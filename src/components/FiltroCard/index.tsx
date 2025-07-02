import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string

}
const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contator>{contador}</S.Contator>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroCard
