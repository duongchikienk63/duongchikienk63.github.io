import { db } from '~/firebase';

import {
    collection,
    getDocs,
} from 'firebase/firestore';

const BrandArticleCollectionRef = collection(db, 'brandArticle');

class BrandArticleDataService {
    getAllBrandArticles = () => {
        return getDocs(BrandArticleCollectionRef);
    };

}

export default new BrandArticleDataService();