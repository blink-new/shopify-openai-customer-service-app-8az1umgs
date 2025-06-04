import { useState } from 'react'
import { Settings, Key, Store, MessageSquare, Save, CheckCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Switch } from './ui/switch'
import { Separator } from './ui/separator'

export default function SettingsPage() {
  const [shopifyUrl, setShopifyUrl] = useState('your-store.myshopify.com')
  const [openaiKey, setOpenaiKey] = useState('')
  const [autoRespond, setAutoRespond] = useState(true)
  const [responseDelay, setResponseDelay] = useState('2')
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          App Configuration
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Configure your Shopify store connection and OpenAI settings to get the most out of your AI customer service assistant.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Shopify Integration */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Store className="w-5 h-5 text-white" />
              </div>
              <span>Shopify Integration</span>
            </CardTitle>
            <CardDescription>
              Connect your Shopify store to enable order tracking and product information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="shopify-url">Store URL</Label>
              <Input
                id="shopify-url"
                value={shopifyUrl}
                onChange={(e) => setShopifyUrl(e.target.value)}
                placeholder="your-store.myshopify.com"
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="api-key">Shopify API Key</Label>
              <Input
                id="api-key"
                type="password"
                placeholder="Enter your Shopify API key"
                className="border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-green-800">Connection Status</p>
                <p className="text-sm text-green-600">Connected and verified</p>
              </div>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </CardContent>
        </Card>

        {/* OpenAI Configuration */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Key className="w-5 h-5 text-white" />
              </div>
              <span>OpenAI Configuration</span>
            </CardTitle>
            <CardDescription>
              Configure your OpenAI API settings for AI-powered responses
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="openai-key">OpenAI API Key</Label>
              <Input
                id="openai-key"
                type="password"
                value={openaiKey}
                onChange={(e) => setOpenaiKey(e.target.value)}
                placeholder="sk-..."
                className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">AI Model</Label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option>gpt-4.1-nano (Recommended)</option>
                <option>gpt-4.1</option>
                <option>gpt-3.5-turbo</option>
              </select>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="font-medium text-purple-800">API Status</p>
                <p className="text-sm text-purple-600">Ready to process requests</p>
              </div>
              <CheckCircle className="w-5 h-5 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Behavior Settings */}
      <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span>AI Behavior Settings</span>
          </CardTitle>
          <CardDescription>
            Customize how your AI assistant interacts with customers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-base font-medium">Auto-respond to customers</Label>
              <p className="text-sm text-gray-600">Automatically respond to customer inquiries without manual approval</p>
            </div>
            <Switch
              checked={autoRespond}
              onCheckedChange={setAutoRespond}
              className="data-[state=checked]:bg-blue-600"
            />
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="response-delay">Response Delay (seconds)</Label>
            <Input
              id="response-delay"
              type="number"
              value={responseDelay}
              onChange={(e) => setResponseDelay(e.target.value)}
              min="0"
              max="10"
              className="w-32 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-600">Add a natural delay to make responses feel more human</p>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label>AI Personality</Label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Professional & Helpful</option>
              <option>Friendly & Casual</option>
              <option>Formal & Direct</option>
              <option>Empathetic & Understanding</option>
            </select>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label>Language</Label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>English</option>
              <option>Dutch</option>
              <option>German</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleSave}
          className={`px-8 py-3 text-lg font-medium transition-all duration-300 ${
            isSaved
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
          }`}
        >
          {isSaved ? (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              Settings Saved!
            </>
          ) : (
            <>
              <Save className="w-5 h-5 mr-2" />
              Save Configuration
            </>
          )}
        </Button>
      </div>
    </div>
  )
}