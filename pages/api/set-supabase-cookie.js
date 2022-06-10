import { supabase } from '../../utills/supabase'

const hundler = async (req, res) => {
  await supabase.auth.api.setAuthCookie(req, res)
}
export default hundler
