import { ContentfulComponentProps } from '@App/service/contentfulMapper'

type Props = ContentfulComponentProps & {
    fields: any[]
}

export const Post = (props: Props): import('react').ReactElement => {
    console.log('id: ', props);

    return (
        <div>asd</div>
        )
}
