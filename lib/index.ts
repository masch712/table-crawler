import sns = require('@aws-cdk/aws-sns');
import sqs = require('@aws-cdk/aws-sqs');
import cdk = require('@aws-cdk/cdk');

export interface OpenTableCrawlerProps {
  /**
   * The visibility timeout to be configured on the SQS Queue, in seconds.
   *
   * @default 300
   */
  visibilityTimeout?: number;
}

export class OpenTableCrawler extends cdk.Construct {
  /** @returns the ARN of the SQS queue */
  public readonly queueArn: string;

  constructor(scope: cdk.Construct, id: string, props: OpenTableCrawlerProps = {}) {
    super(scope, id);

    const queue = new sqs.Queue(this, 'OpenTableCrawlerQueue', {
      visibilityTimeoutSec: props.visibilityTimeout || 300
    });

    const topic = new sns.Topic(this, 'OpenTableCrawlerTopic');

    topic.subscribeQueue(queue);

    this.queueArn = queue.queueArn;
  }
}
