import React, { useState } from 'react';
import Input from './Input';

const ServiceRegistration = () => {
  const [response, setResponse] = useState();

  const handleSubmit = () => {
    const payload = {
      serviceId: document.getElementById('serviceId').value,
      serviceName: document.getElementById('serviceName').value,
      responseMode: {
        kafka: {
          topic: document.getElementById('kafkaTopic').value
        },
        webhook: {
          url: document.getElementById('webhookUrl').value,
          method: document.getElementById('kafkaTopic').value
        }
      },
      msgRetentionPeriod: document.getElementById('kafkaTopic').value,
      maxMessageSize: document.getElementById('webhookMethod').value
    };

    fetch('url', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json',
        Accept: '*'
      }
    }).then(res => setResponse(res));
  };

  return (
    <div className="pl-300 pr-300 w-7/12 mt-16">
      {console.log('data from api =', response)}
      <div>
        <Input label="Service Id" placeholder="Enter Service Id" name="serviceId" id="serviceId" />
      </div>
      <div>
        <Input label="Service Name" placeholder="Enter Service Name" name="serviceName" id="serviceName" />
      </div>
      <div>
        <h3 className="text-left">Response Modes</h3>
        <h2 className="text-left">Kafka</h2>
        <div>
          <Input label="Kafka Topic" placeholder="Enter Kafka Topic" name="kafkaTopic" id="kafkaTopic" />
          <h2 className="text-left">WebHook</h2>
        </div>

        <div>
          <Input label="Webhook Url" placeholder="Enter Webhook Url" name="webhookUrl" id="webhookUrl" />
          <Input label="Webhook Method" placeholder="Enter Webhook Method" name="webhookMethod" id="webhookMethod" />
        </div>
      </div>
      <div>
        <Input
          label="Message Retention Period"
          placeholder="Enter message retention period"
          name="msgRetentionPeriod"
          id="msgRetentionPeriod"
        />
      </div>
      <div>
        <Input
          label="Maximum Message Size"
          placeholder="Enter maximum message size"
          name="maxMessageSize"
          id="maxMessageSize"
        />
      </div>
      <div className="flex items-left">
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ServiceRegistration;
