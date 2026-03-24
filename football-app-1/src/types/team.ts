export type PositionType = 'Torwart' | 'Abwehr' | 'Mittelfeld' | 'Sturm'

export interface PlayerType {
  id: string
  firstName: string
  lastName: string
  position: PositionType
  shotPowerRight: number
  shotPowerLeft: number
  shotPowerHead: number
}
