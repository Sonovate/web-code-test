// NOTE: This is an example test file
import { render } from "@testing-library/react"

const PostPage = () => {
  return <p>test</p>
}

test('should render PostPage component ', ()=>{
    const {getByText} = render(<PostPage/>)
    expect(getByText('test')).toBeInTheDocument()
})