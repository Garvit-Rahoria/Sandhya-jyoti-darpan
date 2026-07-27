import { useParams } from 'react-router-dom'
import { menuItems } from '../../data/sidebarMenu'
import TopNews from './TopNews'
import StateCity from './StateCity'
import Cricket from './Cricket'
import BhaskarSpecial from './BhaskarSpecial'
import DBOriginal from './DB-Original'
import Sports from './Sports'
import Bollywood from './Bollywood'
import Business from './Business'

const categoryComponents = {
  'top-news': TopNews,
  'state-city': StateCity,
  cricket: Cricket,
  'bhaskar-special': BhaskarSpecial,
  'db-original': DBOriginal,
  sports: Sports,
  bollywood: Bollywood,
  business: Business,
}

function CategoryPage() {
  const { categoryId = 'top-news' } = useParams()
  const category = menuItems.find((item) => item.id === categoryId)
  const CategoryComponent = categoryComponents[categoryId]

  if (!category) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Category not found</h1>
        <p className="mt-2 text-gray-400">Please select a valid category from the sidebar.</p>
      </div>
    )
  }

  if (CategoryComponent) {
    return <CategoryComponent />
  }

  return (
    <div>
      <div className="flex items-center gap-4 border-b border-gray-700 pb-4">
        {category.icon}
        <h1 className="text-3xl font-bold">{category.title}</h1>
      </div>

      <div className="mt-6 rounded-lg border border-gray-700 bg-[#202020] p-5">
        <h2 className="text-xl font-semibold">{category.title} Page</h2>
        <p className="mt-2 text-gray-400">
          Yaha {category.title} ka content show hoga.
        </p>
      </div>
    </div>
  )
}

export default CategoryPage
