import React, { useState } from 'react';
import { Key, Store, AlertCircle, Check, Save } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const SettingsPage: React.FC = () => {
  const [openAIKey, setOpenAIKey] = useState('');
  const [shopifyStore, setShopifyStore] = useState('');
  const [shopifyToken, setShopifyToken] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = (section: string) => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    // In a real app, save to backend/secure storage
    console.log(`Saving ${section} settings...`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Settings
        </h2>
        <p className="text-gray-600 mt-1">Configure your OpenAI and Shopify integration</p>
      </div>

      {saved && (
        <Alert className="bg-green-50 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            Settings saved successfully!
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="openai" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 bg-white/70 backdrop-blur-sm">
          <TabsTrigger value="openai">OpenAI Configuration</TabsTrigger>
          <TabsTrigger value="shopify">Shopify Configuration</TabsTrigger>
        </TabsList>

        <TabsContent value="openai">
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5 text-purple-600" />
                OpenAI API Configuration
              </CardTitle>
              <CardDescription>
                Connect your OpenAI account to enable AI-powered customer service
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="openai-key">API Key</Label>
                <Input
                  id="openai-key"
                  type="password"
                  placeholder="sk-..."
                  value={openAIKey}
                  onChange={(e) => setOpenAIKey(e.target.value)}
                  className="font-mono"
                />
                <p className="text-sm text-gray-500">
                  Get your API key from{' '}
                  <a 
                    href="https://platform.openai.com/api-keys" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    OpenAI Dashboard
                  </a>
                </p>
              </div>

              <Alert className="bg-blue-50 border-blue-200">
                <AlertCircle className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  Your API key is encrypted and stored securely. We use GPT-4 for the best customer service experience.
                </AlertDescription>
              </Alert>

              <Button 
                onClick={() => handleSave('openai')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                Save OpenAI Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shopify">
          <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="w-5 h-5 text-purple-600" />
                Shopify Store Configuration
              </CardTitle>
              <CardDescription>
                Connect your Shopify store to access customer data and orders
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="store-url">Store URL</Label>
                <Input
                  id="store-url"
                  type="text"
                  placeholder="your-store.myshopify.com"
                  value={shopifyStore}
                  onChange={(e) => setShopifyStore(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="access-token">Access Token</Label>
                <Input
                  id="access-token"
                  type="password"
                  placeholder="shpat_..."
                  value={shopifyToken}
                  onChange={(e) => setShopifyToken(e.target.value)}
                  className="font-mono"
                />
                <p className="text-sm text-gray-500">
                  Create a private app in your{' '}
                  <a 
                    href="https://admin.shopify.com/store/apps/private" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Shopify Admin
                  </a>
                </p>
              </div>

              <Alert className="bg-amber-50 border-amber-200">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  Make sure your private app has read access to customers, orders, and products.
                </AlertDescription>
              </Alert>

              <Button 
                onClick={() => handleSave('shopify')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Shopify Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;