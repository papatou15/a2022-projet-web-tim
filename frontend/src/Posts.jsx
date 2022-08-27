import useFetch from './Hooks/useFetch';
import { TrimDOMElements } from './utils/strings-utils';
import './Posts.scss';

export default function Posts(props) {

    const posts = useFetch('http://localhost/projet-web-5w5/index.php/wp-json/wp/v2/posts');

    return (
        <div className="Posts">
            {
                (posts != null) ?
                    (posts.length >= 1) ?
                        posts.map(
                            post => <div key={post.id}>{TrimDOMElements(post.content.rendered)}</div>
                        )
                        :
                        <div>
                            Aucun posts yet.
                        </div>
                    :
                    <div>Loading...</div>
            }
        </div>
    );
}