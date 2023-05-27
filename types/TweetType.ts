import UserType from './UserType'

export default interface TweetType {
  id: string
  content: string
  user: UserType
  createdAt: string
  image?: string
  numberOfComments?: number
  numberOfRetweets?: number
  numberOfLikes?: number
  impressions?: number
}
